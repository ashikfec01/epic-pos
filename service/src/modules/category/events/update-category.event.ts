import { IEvent } from "@nestjs/cqrs";

export class UpdateCategoryEvent implements IEvent {
  constructor(public readonly event) {}
}