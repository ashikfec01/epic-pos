import { Injectable } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { GetProductQuery } from "../queries/get-product.query";

@Injectable()
@QueryHandler(GetProductQuery)
export class GetProductQueryHandler implements IQueryHandler<GetProductQuery> {
  constructor(private readonly prismaService: PrismaService) { }

  async execute(query: GetProductQuery): Promise<any> {
    try {
      return await this.prismaService
    } catch (error) {
      return error;
    }
  }
}