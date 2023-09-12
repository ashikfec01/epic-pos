import { Injectable } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { GetProductListQuery } from "../queries/get-product-list.query";

@Injectable()
@QueryHandler(GetProductListQuery)
export class GetProductListQueryHandler implements IQueryHandler<GetProductListQuery> {
  constructor(private readonly prismaService: PrismaService) { }

  async execute(query: GetProductListQuery): Promise<any> {
    try {
      return await this.prismaService
    } catch (error) {
      return error;
    }
  }
}