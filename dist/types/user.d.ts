import { Role } from "./role";
export declare class User {
    id: string;
    createdAt: Date;
    email: string;
    name: string;
    role?: Role | undefined;
    roleId?: string | undefined;
    password: string;
}
