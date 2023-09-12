import { Injectable, Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { RemovedSupplierEvent } from "../events/removed-supplier.event";

@Injectable()
@EventsHandler(RemovedSupplierEvent)
export class RemovedSupplierEventHandler implements IEventHandler<RemovedSupplierEvent> {
  constructor(

   ) {}

  async handle(event: RemovedSupplierEvent): Promise<any> {
    try {
       Logger.log(event)
      return 
    } catch (error) {
      return error;
    }
  }
}