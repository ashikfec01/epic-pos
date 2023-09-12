import { Injectable } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { GetBrandQuery } from "../queries/get-brand.query";
@Injectable()
@QueryHandler(GetBrandQuery)
export class GetBrandQueryHandler implements IQueryHandler<GetBrandQuery>{
  constructor(private readonly prismaService: PrismaService) { }
  async execute(query: GetBrandQuery): Promise<any> {
    try {
      return await this.prismaService
    } catch (error) {
      return error;
    }
  }
}