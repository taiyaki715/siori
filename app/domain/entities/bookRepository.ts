import type { Book } from "./book";

export interface BookRepository {
    findById: (id: string) => Promise<Book | null>;
    save: (book: Book) => Promise<void>;
}