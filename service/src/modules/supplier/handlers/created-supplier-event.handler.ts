import { Injectable, Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { CreatedSupplierEvent } from "../events/created-supplier.event";

@Injectable()
@EventsHandler(CreatedSupplierEvent)
export class CreatedSupplierEventHandler implements IEventHandler<CreatedSupplierEvent> {
  constructor(

   ) {}

  async handle(event: CreatedSupplierEvent): Promise<any> {
    try {
       Logger.log(event)
      return 
    } catch (error) {
      return error;
    }
  }
}