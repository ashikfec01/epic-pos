import { Injectable, Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { UpdateCategoryEvent } from "../events/update-category.event";

@Injectable()
@EventsHandler(UpdateCategoryEvent)
export class UpdateCategoryEventHandler implements IEventHandler<UpdateCategoryEvent> {
  constructor(

   ) {}

  async handle(event: UpdateCategoryEvent): Promise<any> {
    try {
       Logger.log(event)
      return 
    } catch (error) {
      return error;
    }
  }
}