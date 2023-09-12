import { IEvent } from "@nestjs/cqrs";

export class UpdatedBrandEvent implements IEvent {
  constructor(public readonly event) {}
}