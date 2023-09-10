import { IEvent } from "@nestjs/cqrs";
import { Prisma } from "@prisma/client";

export class RoleCreatedEvent implements IEvent {
  constructor(public readonly role: Prisma.RoleCreateInput) {}
}