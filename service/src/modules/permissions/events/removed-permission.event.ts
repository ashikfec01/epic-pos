import { IEvent } from "@nestjs/cqrs";

export class RemovedPermissionEvent implements IEvent {
  constructor(public readonly event) {}
}