import { IEvent } from "@nestjs/cqrs";

export class CreatedProductEvent implements IEvent {
  constructor(public readonly event) {}
}