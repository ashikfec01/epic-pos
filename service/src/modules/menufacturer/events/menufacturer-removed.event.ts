import { IEvent } from "@nestjs/cqrs";

export class MenufacturerRemovedEvent implements IEvent {
  constructor(public readonly event) {}
}