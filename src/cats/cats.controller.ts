import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import type { CreateCatDto, UpdateCatDto } from './types/cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll() { return this.catsService.findAll(); }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id);
  }

  @Post()
  create(@Body() dto: CreateCatDto) {
    return this.catsService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCatDto) {
    return this.catsService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
