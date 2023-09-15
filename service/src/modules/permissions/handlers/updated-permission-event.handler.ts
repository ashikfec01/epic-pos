import { Injectable, Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { UpdatedPermissionEvent } from "../events/updated-permission.event";

@Injectable()
@EventsHandler(UpdatedPermissionEvent)
export class UpdatedPermissionEventHandler implements IEventHandler<UpdatedPermissionEvent> {
  constructor(

   ) {}

  async handle(event: UpdatedPermissionEvent): Promise<any> {
    try {
       Logger.log(event)
      return 
    } catch (error) {
      return error;
    }
  }
}