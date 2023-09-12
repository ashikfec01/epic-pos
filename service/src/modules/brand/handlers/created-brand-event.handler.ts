import { Injectable, Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { CreatedBrandEvent } from "../events/created-brand.event";

@Injectable()
@EventsHandler(CreatedBrandEvent)
export class CreatedBrandEventHandler implements IEventHandler<CreatedBrandEvent> {
  constructor(

   ) {}

  async handle(event: CreatedBrandEvent): Promise<any> {
    try {
       Logger.log(event)
      return 
    } catch (error) {
      return error;
    }
  }
}