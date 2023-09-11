import { ICommand } from "@nestjs/cqrs";
import { CreateRackDto } from "../dto/create-rack.dto";

export class CreateRackCommand implements ICommand {
  constructor(public readonly rackDto: CreateRackDto) {}
}