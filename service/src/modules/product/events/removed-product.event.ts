import { IEvent } from "@nestjs/cqrs";

export class RemovedProductEvent implements IEvent {
  constructor(public readonly event) {}
}