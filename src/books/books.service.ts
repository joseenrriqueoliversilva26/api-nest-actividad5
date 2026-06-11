import { Injectable } from '@nestjs/common';
import { Book } from './types/book.entity';
import { CreateBookDto, UpdateBookDto } from './types/book.dto';

@Injectable()
export class BooksService {
  private books: Book[] = [
    { id: 1, title: 'Clean Code', author: 'Robert C. Martin', year: 2008 },
    { id: 2, title: 'El Principito', author: 'Antoine de Saint-Exupéry', year: 1943 },
  ];

  findAll(): Book[] { return this.books; }

  findOne(id: number): Book | undefined {
    return this.books.find(b => b.id === id);
  }

  create(dto: CreateBookDto): Book {
    const book = { id: Date.now(), ...dto };
    this.books.push(book);
    return book;
  }

  update(id: number, dto: UpdateBookDto): Book | null {
    const i = this.books.findIndex(b => b.id === id);
    if (i === -1) return null;
    this.books[i] = { ...this.books[i], ...dto };
    return this.books[i];
  }

  remove(id: number): boolean {
    const before = this.books.length;
    this.books = this.books.filter(b => b.id !== id);
    return this.books.length < before;
  }
}
