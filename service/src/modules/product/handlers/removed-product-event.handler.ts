import { Injectable, Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { RemovedProductEvent } from "../events/removed-product.event";

@Injectable()
@EventsHandler(RemovedProductEvent)
export class RemovedProductEventHandler implements IEventHandler<RemovedProductEvent> {
  constructor(

   ) {}

  async handle(event: RemovedProductEvent): Promise<any> {
    try {
       Logger.log(event)
      return 
    } catch (error) {
      return error;
    }
  }
}