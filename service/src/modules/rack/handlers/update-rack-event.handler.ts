import { Injectable, Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { UpdateRackEvent } from "../events/update-reack.event";

@Injectable()
@EventsHandler(UpdateRackEvent)
export class UpdateRackEventHandler implements IEventHandler<UpdateRackEvent> {
  constructor(

   ) {}

  async handle(event: UpdateRackEvent): Promise<any> {
    try {
       Logger.log(event)
      return 
    } catch (error) {
      return error;
    }
  }
}