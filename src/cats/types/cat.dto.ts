export interface CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

export interface UpdateCatDto {
  name?: string;
  age?: number;
  breed?: string;
}
