export interface User {
    uid: string;
    email?: string | null;
    displayName?: string | null;
    photoURL?: string | null;
    emailVerified: boolean;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    birthDate: Date;
    status: 'superadmin' | 'admin' | 'guest';
    phoneNumber: string;
    dateCreated: Date;
    dateUpdated: Date;
    }

export class UserModel implements User {
    constructor(
        public uid: string,
        public email: string | null,
        public photoURL: string | null,
        public emailVerified: boolean,
        public firstName: string,
        public lastName: string,
        public middleName: string | null,
        public birthDate: Date,
        public status: 'superadmin' | 'admin' | 'guest',
        public phoneNumber: string,
        public dateCreated: Date,
        public dateUpdated: Date
    ) {}

get displayName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}