import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { RoleEventsHandler } from './handlers/role-events.handler';
import { RoleCreatedEventHandler } from './handlers/role-create-event.handler';
import { CreateRoleCommandHandler } from './handlers/create-role-command.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { DatabaseModule } from 'service/src/infrastructure/database/database.module';
import { GetRoleQueryHandler } from './handlers/get-role-query.handler';
import { UpdateRoleCommandHandler } from './handlers/update-role-command.handler';
import { RemoveRoleCommandHandler } from './handlers/remove-role-command.handler';

@Module({
  imports: [CqrsModule, DatabaseModule],
  controllers: [RoleController],
  providers: [
    RoleService, 
    RoleEventsHandler, 
    RoleCreatedEventHandler, 
    CreateRoleCommandHandler,
     GetRoleQueryHandler,
     UpdateRoleCommandHandler,
     RemoveRoleCommandHandler
    ],
})
export class RoleModule {}
