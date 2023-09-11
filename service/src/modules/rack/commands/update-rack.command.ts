import { ICommand } from "@nestjs/cqrs";
import { UpdateRackDto } from "../dto/update-rack.dto";

export class UpdateRackCommannd implements ICommand {
  constructor(public readonly rackId: string, public readonly rackDto: UpdateRackDto){}
}