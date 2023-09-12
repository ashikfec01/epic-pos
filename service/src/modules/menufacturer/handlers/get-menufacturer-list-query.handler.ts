import { Injectable } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { GetMenufacturerListQuery } from "../queries/get-menufacturer-list.query";

@Injectable()
@QueryHandler(GetMenufacturerListQuery)
export class GetMenufacturerListQueryHandler implements IQueryHandler<GetMenufacturerListQuery> {
  constructor(private readonly prismaService: PrismaService) { }

  async execute(query: GetMenufacturerListQuery): Promise<any> {
    try {
      return await this.prismaService
    } catch (error) {
      return error;
    }
  }
}