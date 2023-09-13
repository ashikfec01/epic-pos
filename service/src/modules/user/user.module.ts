import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateUserHandler } from './handlers/create-user.handler';
import { PrismaService } from 'service/src/infrastructure/database/prisma.service';
import { UserEventsHander } from './events/user-events.handlers';
import { UserCreatedEventsHander } from './handlers/user-created.handler';
import { GetUserQueryHandler } from './handlers/get-user-query.handler';
import { PasswordHashCommnadHandler } from './handlers/password-hash-command.handler';
import { GetUserListQueryHandler } from './handlers/get-user-list-query.handler';

@Module({
  imports: [CqrsModule,EventEmitterModule.forRoot(),],
  controllers: [UserController],
  providers: [
    PasswordHashCommnadHandler,
    UserService, 
    CreateUserHandler, 
    PrismaService, 
    UserEventsHander,
    UserCreatedEventsHander,
    GetUserQueryHandler,
    GetUserListQueryHandler
  ],
})
export class UserModule {}
 