import { isUUID } from "@/app/utils/isUUID";

export class BookShelve {
    public readonly id: string;
    public readonly userId: string;
    public readonly bookId: string;

    constructor(id: string, userId: string, bookId: string) {
        BookShelve.validateId(id);
        BookShelve.validateUserId(userId);
        BookShelve.validateBookId(bookId);

        this.id = id;
        this.userId = userId;
        this.bookId = bookId;
    }

    private static validateId(value: string): void {
        if (!isUUID(value)) {
            throw new Error('idはUUID形式である必要があります。');
        }
    }

    private static validateUserId(value: string): void {
        if (!isUUID(value)) {
            throw new Error('userIdはUUID形式である必要があります。');
        }
    }

    private static validateBookId(value: string): void {
        if (!isUUID(value)) {
            throw new Error('bookIdはUUID形式である必要があります。');
        }
    }
}
