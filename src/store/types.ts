export interface StateSchema {
  books: BooksSchema;
}
export interface BooksSchema {
  loading: boolean;
  error: string;
  searchInput: string;
  books: any[];
  category: string;
  sort: string;
}
