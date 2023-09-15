import { Injectable, Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { GetPermissionQuery } from "../queries/get-permission.query";

@Injectable()
@EventsHandler(GetPermissionQuery)
export class GetPermissionQueryHandler implements IEventHandler<GetPermissionQuery> {
  constructor(

   ) {}

  async handle(event: GetPermissionQuery): Promise<any> {
    try {
       Logger.log(event)
      return 
    } catch (error) {
      return error;
    }
  }
}