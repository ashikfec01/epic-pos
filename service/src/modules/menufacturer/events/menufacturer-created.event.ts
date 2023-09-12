import { IEvent } from "@nestjs/cqrs";

export class MenufacturerCreatedEvent implements IEvent {
  constructor(public readonly event) {}
}