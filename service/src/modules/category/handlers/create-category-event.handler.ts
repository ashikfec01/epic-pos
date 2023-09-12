import { Injectable, Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { CreateCategoryEvent } from "../events/create-category.event";

@Injectable()
@EventsHandler(CreateCategoryEvent)
export class CreateCategoryEventHandler implements IEventHandler<CreateCategoryEvent> {
  constructor(

   ) {}

  async handle(event: CreateCategoryEvent): Promise<any> {
    try {
       Logger.log(event)
      return 
    } catch (error) {
      return error;
    }
  }
}