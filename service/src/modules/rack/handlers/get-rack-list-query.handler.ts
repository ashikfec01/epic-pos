import { EventBus, IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetRackListQuery } from "../queries/get-rack-list.query";
import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { CreateRackEvent } from "../events/create-rack.event";
@Injectable()
@QueryHandler(GetRackListQuery)
export class GetRackListQueryHandler implements IQueryHandler<GetRackListQuery>{
  constructor(
    private readonly prismaService: PrismaService,
    private readonly eventBus: EventBus,
    ){}
  async execute(query: GetRackListQuery): Promise<any> {
    try {
      const response = await this.prismaService.$transaction([
        this.prismaService.rack.count(),
        this.prismaService.rack.findMany({
          orderBy: {updated_at: 'asc'},
          take: new Number(query.limit).valueOf(),
          skip: query.limit * query.pageNumber,
        })
      ]);
      return {total: response[0], data: response[1]}
    } catch (error) {
      return error;
    }
  }
}