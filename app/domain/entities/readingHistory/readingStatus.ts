export class ReadingStatus {
    private constructor(private readonly value: "reading" | "finished") {}

    public static readonly READING = new ReadingStatus("reading");
    public static readonly FINISHED = new ReadingStatus("finished");

    public create(value: "reading" | "finished"): ReadingStatus {
        switch (value) {
            case "reading":
                return ReadingStatus.READING;
            case "finished":
                return ReadingStatus.FINISHED;
            default:
                throw new Error("不正な値です。");
        }
    }

    public equals(other: ReadingStatus): boolean {
        return this.value === other.value;
    }

    
}