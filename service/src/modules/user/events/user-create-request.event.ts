import { CreateUserDto } from "../dto/create-user.dto";

export class UserCreateRequestEvent {
  constructor(
    public readonly user: CreateUserDto,
  ){}
}