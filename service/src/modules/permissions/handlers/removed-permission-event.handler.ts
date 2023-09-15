import { Injectable, Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { RemovedPermissionEvent } from "../events/removed-permission.event";

@Injectable()
@EventsHandler(RemovedPermissionEvent)
export class RemovedPermissionEventHandler implements IEventHandler<RemovedPermissionEvent> {
  constructor(

   ) {}

  async handle(event: RemovedPermissionEvent): Promise<any> {
    try {
       Logger.log(event)
      return 
    } catch (error) {
      return error;
    }
  }
}