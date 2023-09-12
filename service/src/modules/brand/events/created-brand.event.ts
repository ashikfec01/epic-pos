import { IEvent } from "@nestjs/cqrs";

export class CreatedBrandEvent implements IEvent {
  constructor(public readonly event) {}
}