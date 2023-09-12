import { Injectable } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { GetCategoryQuery } from "../queries/get-category.query";

@Injectable()
@QueryHandler(GetCategoryQuery)
export class GetCategoryQueryHandler implements IQueryHandler<GetCategoryQuery> {
  constructor(private readonly prismaService: PrismaService) { }

  async execute(query: GetCategoryQuery): Promise<any> {
    try {
      return await this.prismaService
    } catch (error) {
      return error;
    }
  }
}