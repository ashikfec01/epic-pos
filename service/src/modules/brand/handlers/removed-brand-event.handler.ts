import { Injectable, Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { RemovedBrandEvent } from "../events/removed-brand.event";

@Injectable()
@EventsHandler(RemovedBrandEvent)
export class RemovedBrandEventHandler implements IEventHandler<RemovedBrandEvent> {
  constructor(

   ) {}

  async handle(event: RemovedBrandEvent): Promise<any> {
    try {
       Logger.log(event)
      return 
    } catch (error) {
      return error;
    }
  }
}