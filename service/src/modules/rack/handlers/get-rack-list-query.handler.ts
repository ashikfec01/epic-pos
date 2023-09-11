import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetRackListQuery } from "../queries/get-rack-list.query";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
@Injectable()
@QueryHandler(GetRackListQuery)
export class GetRackListQueryHandler implements IQueryHandler<GetRackListQuery>{
  constructor(private readonly prismaService: PrismaService){}
  async execute(query: GetRackListQuery): Promise<any> {
    try {
      return await this.prismaService.rack.findMany({
        orderBy: {updated_at: 'asc'},
        take: query.limit,
        skip: query.limit * query.pageNumber,
      });
    } catch (error) {
      console.table(error)
      return error;
    }
  }
}