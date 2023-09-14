import { Injectable, Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { CreatedProductEvent } from "../events/created-product.event";

@Injectable()
@EventsHandler(CreatedProductEvent)
export class CreatedProductEventHandler implements IEventHandler<CreatedProductEvent> {
  constructor(

   ) {}

  async handle(event: CreatedProductEvent): Promise<any> {
    try {
       Logger.log(event)
      return 
    } catch (error) {
      return error;
    }
  }
}