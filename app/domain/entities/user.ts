import { isMailAddress } from '@/app/utils/isMailAddress';
import { isUUID } from '@/app/utils/isUUID';

export class User {
    public readonly id: string;
    private _name: string;
    private _email: string;

    static MIN_NAME_LENGTH = 1;
    static MAX_NAME_LENGTH = 50;

    constructor(id: string, name: string, email: string) {
        if (!isUUID(id)) {
            throw new Error('IDはUUID形式である必要があります。');
        }

        this.id = id;
        this._name = name;
        this._email = email;
    }

    public set name(value: string) {
        if (value.length < User.MIN_NAME_LENGTH) {
            throw new Error('名前は1文字以上である必要があります。');
        }
        if (value.length > User.MAX_NAME_LENGTH) {
            throw new Error('名前は50文字以下である必要があります。');
        }

        this._name = value;
    }

    public set email(value: string) {
        if (!isMailAddress(value)) {
            throw new Error('メールアドレスの形式が正しくありません。');
        }

        this._email = value;
    }

    public get name(): string {
        return this._name;
    }

    public get email(): string {
        return this._email;
    }
}
