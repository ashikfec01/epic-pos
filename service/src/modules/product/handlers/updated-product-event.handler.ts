import { Injectable, Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { UpdatedProductEvent } from "../events/updated-product.event";

@Injectable()
@EventsHandler(UpdatedProductEvent)
export class UpdatedProductEventHandler implements IEventHandler<UpdatedProductEvent> {
  constructor(

   ) {}

  async handle(event: UpdatedProductEvent): Promise<any> {
    try {
       Logger.log(event)
      return 
    } catch (error) {
      return error;
    }
  }
}