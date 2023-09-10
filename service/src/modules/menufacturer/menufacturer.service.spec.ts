import { Test, TestingModule } from '@nestjs/testing';
import { MenufacturerService } from './menufacturer.service';

describe('MenufacturerService', () => {
  let service: MenufacturerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenufacturerService],
    }).compile();

    service = module.get<MenufacturerService>(MenufacturerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
