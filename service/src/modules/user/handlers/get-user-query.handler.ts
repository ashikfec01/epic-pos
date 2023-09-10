import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetUserQuery } from "../queries/get-user.query";
import { Injectable } from "@nestjs/common";
import { UserService } from "../user.service";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { EventEmitter2, OnEvent } from "@nestjs/event-emitter";
import { GetUserQueryEvent } from "../events/get-user-query.event";
import { Prisma } from "@prisma/client";

@Injectable()
@QueryHandler(GetUserQuery)
export class GetUserQueryHandler implements IQueryHandler<GetUserQuery> {
  constructor(
    private readonly userService: UserService,
    private readonly prismaService: PrismaService,
    private readonly eventEmitter: EventEmitter2,
  ){}
  @OnEvent('user.create_request', { async: true })
  async execute(query: GetUserQuery): Promise<any> {
    try {
      const data = await this.prismaService.user.findFirst({where: {username: query.username}});
      if (data) {
        return this.eventEmitter.emit('user.data', new GetUserQueryEvent(data));
      } else {
        return this.eventEmitter.emit('user.not_found', new GetUserQueryEvent(query));
      }
    } catch (error) {
      return this.eventEmitter.emit('user.error', new GetUserQueryEvent(error));
    }
  }

}