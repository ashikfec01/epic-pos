import { Injectable } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { GetCategoryQuery } from "../queries/get-category.query";
import { ErrorResponse } from "service/src/common/errors/ErrorResponse";
import { ErrorMessage } from "service/src/common/errors/db-error.message";

@Injectable()
@QueryHandler(GetCategoryQuery)
export class GetCategoryQueryHandler implements IQueryHandler<GetCategoryQuery> {
  constructor(private readonly prismaService: PrismaService) { }

  async execute(query: GetCategoryQuery): Promise<any> {
    try {
      return await this.prismaService.category.findFirst({where: {id: query.categoryId}})
    } catch (error) {
      return ErrorResponse(error.code,ErrorMessage[error.code]());
    }
  }
}