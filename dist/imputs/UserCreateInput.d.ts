import { RoleCreateOneWithoutUsersInput } from "./RoleCreateOneWithoutUsersInput";
export declare class UserCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    email: string;
    name: string;
    role?: RoleCreateOneWithoutUsersInput | undefined;
    password: string;
}
