export interface CreateBookDto {
  title: string;
  author: string;
  year: number;
}

export interface UpdateBookDto {
  title?: string;
  author?: string;
  year?: number;
}
