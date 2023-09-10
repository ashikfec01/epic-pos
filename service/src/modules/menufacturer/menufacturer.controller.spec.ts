import { Test, TestingModule } from '@nestjs/testing';
import { MenufacturerController } from './menufacturer.controller';
import { MenufacturerService } from './menufacturer.service';

describe('MenufacturerController', () => {
  let controller: MenufacturerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenufacturerController],
      providers: [MenufacturerService],
    }).compile();

    controller = module.get<MenufacturerController>(MenufacturerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
