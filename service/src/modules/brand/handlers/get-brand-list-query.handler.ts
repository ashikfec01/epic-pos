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
      return await this.prismaService
    } catch (error) {
      return error;
    }
  }
}