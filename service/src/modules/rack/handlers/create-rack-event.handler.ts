import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { CreateRackEvent } from "../events/create-rack.event";

@EventsHandler(CreateRackEvent)
export class CreateRackEventHandler implements IEventHandler<CreateRackEvent>{
  handle(event: CreateRackEvent) {
    console.table(event.rackId)
  }
}