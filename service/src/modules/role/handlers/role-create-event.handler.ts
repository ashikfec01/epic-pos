import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { RoleCreatedEvent } from "../events/role-created.event";
import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";

@Injectable()
@EventsHandler(RoleCreatedEvent)
export class RoleCreatedEventHandler implements IEventHandler<RoleCreatedEvent> {
  // @OnEvent('role.created')
  async handle(event: RoleCreatedEvent) {
    console.table(event)
  }

}