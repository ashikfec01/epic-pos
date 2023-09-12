import { Injectable, Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { RemovedWarehouseEvent } from "../events/removed-warehouse.event";

@Injectable()
@EventsHandler(RemovedWarehouseEvent)
export class RemovedWarehouseEventHandler implements IEventHandler<RemovedWarehouseEvent> {
  constructor(

   ) {}

  async handle(event: RemovedWarehouseEvent): Promise<any> {
    try {
       Logger.log(event)
      return 
    } catch (error) {
      return error;
    }
  }
}