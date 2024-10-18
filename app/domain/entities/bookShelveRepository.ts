import type { BookShelve } from "./bookShelve";

export interface BookShelveRepository {
    findById: (id: string) => Promise<BookShelve | null>;
    save: (bookShelve: BookShelve) => Promise<void>;
}
