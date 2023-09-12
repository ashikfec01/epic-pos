import { IEvent } from "@nestjs/cqrs";

export class RemovedCategoryEvent implements IEvent {
  constructor(public readonly event) {}
}