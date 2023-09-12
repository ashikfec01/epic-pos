import { Injectable, Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { RemovedCategoryEvent } from "../events/remove-category.event";

@Injectable()
@EventsHandler(RemovedCategoryEvent)
export class RemovedCategoryEventHandler implements IEventHandler<RemovedCategoryEvent> {
  constructor(

   ) {}

  async handle(event: RemovedCategoryEvent): Promise<any> {
    try {
       Logger.log(event)
      return 
    } catch (error) {
      return error;
    }
  }
}