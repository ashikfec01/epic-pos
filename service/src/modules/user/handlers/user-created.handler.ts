import { Injectable, Scope } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { UserCreatedEvent } from "../events/user-created.event";

@Injectable({scope: Scope.DEFAULT})
export class UserCreatedEventsHander implements IEventHandler<UserCreatedEvent> {
  handle(event: UserCreatedEvent) {
    throw new Error("Method not implemented.");
  }

}