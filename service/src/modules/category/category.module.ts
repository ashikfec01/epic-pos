import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { GetCategoryQueryHandler } from './handlers/get-category-query.handler';
import { CreateCategoryCommandHandler } from './handlers/create-category-command.handler';
import { UpdateCategoryCommandHandler } from './handlers/update-category-command.handler';
import { RemoveCategoryCommandHandler } from './handlers/remove-category-command.handler';
import { CreateCategoryEventHandler } from './handlers/create-category-event.handler';
import { UpdateCategoryEventHandler } from './handlers/update-category-event.handler';
import { RemovedCategoryEventHandler } from './handlers/removed-category-event.handler';
import { GetCategoryListQueryHandler } from './handlers/get-category-list-query.handler';

@Module({
  controllers: [CategoryController],
  providers: [
    CategoryService, 
    GetCategoryQueryHandler, 
    CreateCategoryCommandHandler, 
    UpdateCategoryCommandHandler,
    RemoveCategoryCommandHandler,
    CreateCategoryEventHandler,
    UpdateCategoryEventHandler,
    RemovedCategoryEventHandler,
    GetCategoryListQueryHandler
  ],
})
export class CategoryModule {}
