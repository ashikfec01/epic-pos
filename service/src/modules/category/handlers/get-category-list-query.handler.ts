import { Injectable } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { GetCategoryListQuery } from "../queries/get-category-list.query";

@Injectable()
@QueryHandler(GetCategoryListQuery)
export class GetCategoryListQueryHandler implements IQueryHandler<GetCategoryListQuery> {
  constructor(private readonly prismaService: PrismaService) { }

  async execute(query: GetCategoryListQuery): Promise<any> {
    try {
      return await this.prismaService.$transaction([
        this.prismaService.category.count(),
        this.prismaService.category.findMany({
          orderBy: { updated_at: 'desc' },
          take: new Number(query.limit).valueOf(),
          skip: query.pageNumber && query.pageNumber > 1 ? query.limit * (query.pageNumber - 1) : 0
        })
      ]).then((response)=> ({total: response[0], data: response[1]}))
    } catch (error) {
      return error;
    }
  }
}