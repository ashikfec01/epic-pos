import { Injectable, Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { MenufacturerUpdatedEvent } from "../events/menufacturer-updated.event";

@Injectable()
@EventsHandler(MenufacturerUpdatedEvent)
export class MenufacturerUpdatedEventHandler implements IEventHandler<MenufacturerUpdatedEvent> {
  constructor(

   ) {}

  async handle(event: MenufacturerUpdatedEvent): Promise<any> {
    try {
       Logger.log(event)
      return 
    } catch (error) {
      return error;
    }
  }
}