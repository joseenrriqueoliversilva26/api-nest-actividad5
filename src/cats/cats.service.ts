import { Injectable } from '@nestjs/common';
import { Cat } from './types/cat.entity';
import { CreateCatDto, UpdateCatDto } from './types/cat.dto';

@Injectable()
export class CatsService {
  private cats: Cat[] = [
    { id: 1, name: 'Michi', age: 2, breed: 'Siamés' },
    { id: 2, name: 'Luna',  age: 4, breed: 'Persa'  },
  ];

  findAll(): Cat[] { return this.cats; }

  findOne(id: number): Cat | undefined {
    return this.cats.find(c => c.id === id);
  }

  create(dto: CreateCatDto): Cat {
    const newCat = { id: Date.now(), ...dto };
    this.cats.push(newCat);
    return newCat;
  }

  update(id: number, dto: UpdateCatDto): Cat | null {
    const index = this.cats.findIndex(c => c.id === id);
    if (index === -1) return null;
    this.cats[index] = { ...this.cats[index], ...dto };
    return this.cats[index];
  }

  remove(id: number): boolean {
    const before = this.cats.length;
    this.cats = this.cats.filter(c => c.id !== id);
    return this.cats.length < before;
  }
}
