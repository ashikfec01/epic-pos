import { IEvent } from "@nestjs/cqrs";

export class CreatedPermissionEvent implements IEvent {
  constructor(public readonly event) {}
}