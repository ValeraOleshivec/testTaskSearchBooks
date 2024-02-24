export interface StateSchema {
  books: BooksSchema;
}
interface BooksResponse {
  volumeInfo: {
    authors: string[];
    imageLinks: {
      thumbnail: string;
    };
    title: string;
    categories: string[];
  };
  etag: string;
  [key: string]: unknown;
}
export interface BooksSchema {
  loading: boolean;
  error: string;
  searchInput: string;
  books: BooksResponse[];
  category: string;
  sort: string;
  booksIndex: number;
}
