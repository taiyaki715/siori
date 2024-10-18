import type { User } from "./user";

export interface UserRepository {
    findById: (id: string) => Promise<User | null>;
    save: (user: User) => Promise<void>;
}
