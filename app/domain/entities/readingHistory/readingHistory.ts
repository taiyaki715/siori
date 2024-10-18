import { isUUID } from "@/app/utils/isUUID";
import { ReadingStatus } from "./readingStatus";

export class ReadingHistory {
    public readonly id: string;
    public readonly userId: string;
    public readonly bookId: string;
    public readonly startDate: Date;
    private _endDate: Date | null;
    private _readingStatus: ReadingStatus;

    constructor(
        id: string, 
        userId: string, 
        bookId: string,
        startDate: Date,
        endDate: Date | null,
    ) {
        ReadingHistory.validateId(id);
        ReadingHistory.validateUserId(userId);
        ReadingHistory.validateBookId(bookId);
        ReadingHistory.validateStartDate(startDate);

        this.id = id;
        this.userId = userId;
        this.bookId = bookId;
        this.startDate = startDate;
        this._endDate = endDate;
        this._readingStatus = ReadingStatus.READING;
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

    private static validateStartDate(value: Date) {
        if (value > new Date()) {
            throw new Error('開始日時は未来の日時であることはできません。');
        }
    }

    public get endDate(): Date | null {
        return this._endDate;
    }

    public finishReading(): void {
        if (this._readingStatus === ReadingStatus.FINISHED) {
            throw new Error('既に読み終わっています。');
        }

        this._endDate = new Date();
        this._readingStatus = ReadingStatus.FINISHED;
    }
}