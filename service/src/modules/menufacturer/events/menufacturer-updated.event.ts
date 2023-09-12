import { IEvent } from "@nestjs/cqrs";

export class MenufacturerUpdatedEvent implements IEvent {
  constructor(public readonly event) {}
}