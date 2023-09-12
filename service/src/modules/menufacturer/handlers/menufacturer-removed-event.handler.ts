import { Injectable, Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { MenufacturerRemovedEvent } from "../events/menufacturer-removed.event";

@Injectable()
@EventsHandler(MenufacturerRemovedEvent)
export class MenufacturerRemovedEventHandler implements IEventHandler<MenufacturerRemovedEvent> {
  constructor(

   ) {}

  async handle(event: MenufacturerRemovedEvent): Promise<any> {
    try {
       Logger.log(event)
      return 
    } catch (error) {
      return error;
    }
  }
}