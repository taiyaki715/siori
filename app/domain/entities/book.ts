import { isUUID } from "@/app/utils/isUUID";

export class Book {
    public readonly id: string;
    public readonly title: string;

    static MIN_TITLE_LENGTH = 1;
    static MAX_TITLE_LENGTH = 100;

    constructor(id: string, title: string) {
        Book.validateId(id);
        Book.validateTitle(title);

        this.id = id;
        this.title = title;
    }

    private static validateId(value: string): void {
        if (!isUUID(value)) {
            throw new Error('IDはUUID形式である必要があります。');
        }
    }

    private static validateTitle(value: string): void {
        if (value.length < Book.MIN_TITLE_LENGTH) {
            throw new Error('タイトルは1文字以上である必要があります。');
        }
        if (value.length > Book.MAX_TITLE_LENGTH) {
            throw new Error('タイトルは100文字以下である必要があります。');
        }
    }
}
