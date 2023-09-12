import { Injectable, Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { UpdatedSupplierEvent } from "../events/updated-supplier.event";

@Injectable()
@EventsHandler(UpdatedSupplierEvent)
export class UpdatedSupplierEventHandler implements IEventHandler<UpdatedSupplierEvent> {
  constructor(

   ) {}

  async handle(event: UpdatedSupplierEvent): Promise<any> {
    try {
       Logger.log(event)
      return 
    } catch (error) {
      return error;
    }
  }
}