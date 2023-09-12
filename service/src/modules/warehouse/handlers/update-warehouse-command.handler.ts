import { Injectable, Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { UpdateWarehouseCommand } from "../commands/update-warehouse.command";

@Injectable()
@EventsHandler(UpdateWarehouseCommand)
export class UpdateWarehouseCommandHandler implements IEventHandler<UpdateWarehouseCommand> {
  constructor(

   ) {}

  async handle(event: UpdateWarehouseCommand): Promise<any> {
    try {
       Logger.log(event)
      return 
    } catch (error) {
      return error;
    }
  }
}