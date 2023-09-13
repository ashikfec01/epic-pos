import { Injectable } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { GetUserListQuery } from "../queries/get-user-list.query";
import { ErrorResponse } from "service/src/common/errors/ErrorResponse";
import { ErrorMessage } from "service/src/common/errors/db-error.message";

@Injectable()
@QueryHandler(GetUserListQuery)
export class GetUserListQueryHandler implements IQueryHandler<GetUserListQuery> {

  constructor(private readonly prismaService: PrismaService) { }

  async execute(query: GetUserListQuery): Promise<any> {
    try {
      return await this.prismaService.$transaction([
        this.prismaService.user.count(),
        this.prismaService.user.findMany({
          orderBy: {updated_at: 'desc'},
          take: new Number(query.limit).valueOf(),
          skip: query.pageNumber && query.pageNumber > 1 ? query.limit * (query.pageNumber -1) : 0
        })
      ])
    } catch (error) {
      return ErrorResponse(error.code, ErrorMessage[error.code]());
    }
  }
}