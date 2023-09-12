import { Injectable } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { GetBrandListQuery } from "../queries/get-brand-list.query";

@Injectable()
@QueryHandler(GetBrandListQuery)
export class GetBrandListQueryHandler implements IQueryHandler<GetBrandListQuery> {

  constructor(private readonly prismaService: PrismaService) { }

  async execute(query: GetBrandListQuery): Promise<any> {
    try {
      return await this.prismaService.$transaction([
        this.prismaService.brand.count(),
        this.prismaService.brand.findMany({
          orderBy: {updated_at: 'desc'},
          take: new Number(query.limit).valueOf(),
          skip: query.limit * (query.pageNumber - 1),
        })
      ])
    } catch (error) {
      return error;
    }
  }
}