import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetRackQuery } from "../queries/get-rack.query";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";

@Injectable()
@QueryHandler(GetRackQuery)
export class GetRackQueryHandler implements IQueryHandler<GetRackQuery>{
  constructor(private readonly prismaService: PrismaService){}
  async execute(query: GetRackQuery): Promise<any> {
    try {
      return await this.prismaService.rack.findFirst({where: {id: query.rackId}})
    } catch (error) {
      return error;
    }
  }
}