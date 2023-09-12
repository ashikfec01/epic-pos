import { IEvent } from "@nestjs/cqrs";

export class CreateCategoryEvent implements IEvent {
  constructor(public readonly event ) {}
}