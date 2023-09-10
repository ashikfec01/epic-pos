import { IEvent } from "@nestjs/cqrs";
import { Prisma } from "@prisma/client";
import { CreateUserDto } from "../dto/create-user.dto";

export class GetUserQueryEvent implements IEvent {
  constructor(
    public readonly response: CreateUserDto | Prisma.UserCreateInput | any,
  ){}
}