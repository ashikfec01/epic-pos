import { CreateUserDto } from "../dto/create-user.dto";

export class UserCreatedEvent {
  constructor(
    public readonly userId: string,
    
  ){}
}