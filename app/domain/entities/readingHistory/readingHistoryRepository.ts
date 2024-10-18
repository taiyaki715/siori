import type { ReadingHistory } from "./readingHistory";

export interface ReadingHistoryRepository {
    findById: (id: string) => Promise<ReadingHistory | null>;
    save: (readingHistory: ReadingHistory) => Promise<void>;
}
