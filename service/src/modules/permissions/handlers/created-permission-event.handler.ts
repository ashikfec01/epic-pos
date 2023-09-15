import { Injectable, Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { CreatedPermissionEvent } from "../events/created-permission.event";

@Injectable()
@EventsHandler(CreatedPermissionEvent)
export class CreatedPermissionEventHandler implements IEventHandler<CreatedPermissionEvent> {
  constructor(

   ) {}

  async handle(event: CreatedPermissionEvent): Promise<any> {
    try {
       Logger.log(event)
      return 
    } catch (error) {
      return error;
    }
  }
}