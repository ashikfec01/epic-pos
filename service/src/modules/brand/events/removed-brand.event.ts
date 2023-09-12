import { IEvent } from "@nestjs/cqrs";

export class RemovedBrandEvent implements IEvent {
  constructor(public readonly event) {}
}