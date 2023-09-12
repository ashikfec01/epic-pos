import { Injectable, Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { UpdatedBrandEvent } from "../events/updated-brand.event";

@Injectable()
@EventsHandler(UpdatedBrandEvent)
export class UpdatedBrandEventHandler implements IEventHandler<UpdatedBrandEvent> {
  constructor(

   ) {}

  async handle(event: UpdatedBrandEvent): Promise<any> {
    try {
       Logger.log(event)
      return 
    } catch (error) {
      return error;
    }
  }
}