import { IEventHandler } from "@nestjs/cqrs";

export class RackEventsHandlers implements IEventHandler{
  handle(event: any) {
    throw new Error("Method not implemented.");
  }
}