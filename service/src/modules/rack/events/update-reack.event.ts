import { IEvent } from "@nestjs/cqrs";
import { UpdateRackDto } from "../dto/update-rack.dto";

export class UpdateRackEvent implements IEvent {
  constructor(public readonly dto: UpdateRackDto, public readonly id: string) {}
}