import { IEvent } from "@nestjs/cqrs";

export class UpdatedPermissionEvent implements IEvent {
  constructor(public readonly event) {}
}