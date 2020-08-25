import { User } from "./user";
export declare class Role {
    id: string;
    name?: string;
    users?: User[] | undefined;
}
