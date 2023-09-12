import { Injectable } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { GetMenufacturerQuery } from "../queries/get-menufacturer.query";

@Injectable()
@QueryHandler(GetMenufacturerQuery)
export class GetMenufacturerQueryHandler implements IQueryHandler<GetMenufacturerQuery> {
  constructor(private readonly prismaService: PrismaService) { }

  async execute(query: GetMenufacturerQuery): Promise<any> {
    try {
      return await this.prismaService
    } catch (error) {
      return error;
    }
  }
}