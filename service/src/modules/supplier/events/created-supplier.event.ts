import { IEvent } from "@nestjs/cqrs";

export class CreatedSupplierEvent implements IEvent {
  constructor(public readonly event) {}
}