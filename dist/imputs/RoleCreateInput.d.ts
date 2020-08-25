import { UserCreateManyWithoutRoleInput } from './UserCreateManyWithoutRoleInput';
export declare class RoleCreateInput {
    id?: string | undefined;
    name: string;
    users?: UserCreateManyWithoutRoleInput | undefined;
}
