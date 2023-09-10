import { EventBus, IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetRoleQuery } from "../queries/get-role.query";
import { Injectable } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { RoleEvent } from "../events.name";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
@Injectable()
@QueryHandler(GetRoleQuery)
export class GetRoleQueryHandler implements IQueryHandler<GetRoleQuery> {
  constructor(
    private readonly event: EventEmitter2,
    private readonly eventBus: EventBus,
    private readonly prismaService: PrismaService,
  ){}
  async execute(query: GetRoleQuery): Promise<any> {
    // this.eventBus.publish(new )
    return await this.prismaService.role.findFirst({where: {id: query.roleId}})
  }
}