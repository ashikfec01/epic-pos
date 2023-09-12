import { Injectable, Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { CreatedWarehouseEvent } from "../events/created-warehouse.event";

@Injectable()
@EventsHandler(CreatedWarehouseEvent)
export class CreatedWarehouseEventHandler implements IEventHandler<CreatedWarehouseEvent> {
  constructor(

   ) {}

  async handle(event: CreatedWarehouseEvent): Promise<any> {
    try {
       Logger.log(event)
      return 
    } catch (error) {
      return error;
    }
  }
}