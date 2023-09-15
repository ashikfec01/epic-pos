import { Injectable } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { GetPermissionListQuery } from "../queries/get-permission-list.query";

@Injectable()
@QueryHandler(GetPermissionListQuery)
export class GetPermissionHandler implements IQueryHandler<GetPermissionListQuery> {
  constructor(private readonly prismaService: PrismaService) { }

  async execute(query: GetPermissionListQuery): Promise<any> {
    try {
      return await this.prismaService.$transaction([
        this.prismaService.permission.count(),
        this.prismaService.permission.findMany({
          orderBy: {updated_at: 'desc'},
          take: new Number(query.limit).valueOf(),
          skip: query.pageNumber && query.pageNumber > 1 ? query.limit * (query.pageNumber-1) : 0
        })
      ])
    } catch (error) {
      return error;
    }
  }
}