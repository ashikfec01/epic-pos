import { Injectable, Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { MenufacturerCreatedEvent } from "../events/menufacturer-created.event";

@Injectable()
@EventsHandler(MenufacturerCreatedEvent)
export class MenufacturerCreatedEventHandler implements IEventHandler<MenufacturerCreatedEvent> {
  constructor(

   ) {}

  async handle(event: MenufacturerCreatedEvent): Promise<any> {
    try {
       Logger.log(event)
      return 
    } catch (error) {
      return error;
    }
  }
}