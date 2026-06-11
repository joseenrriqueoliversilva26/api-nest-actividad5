import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import type{ CreateBookDto, UpdateBookDto } from './types/book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll() { return this.booksService.findAll(); }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Post()
  create(@Body() dto: CreateBookDto) {
    return this.booksService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateBookDto) {
    return this.booksService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}
