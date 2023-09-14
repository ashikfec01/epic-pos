import { IEvent } from "@nestjs/cqrs";

export class UpdatedProductEvent implements IEvent {
  constructor(public readonly event) {}
}