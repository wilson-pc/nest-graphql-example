import { StringNullableFilter } from "./StringNullableFilter";
import { StringFilter } from "./StringFilter";
import { DateTimeFilter } from "./DateTimeFilter";
import { RoleWhereInput } from "./RoleWhereInput";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    email?: StringFilter | undefined;
    name?: StringFilter | undefined;
    role?: RoleWhereInput | undefined;
    roleId?: StringNullableFilter | undefined;
}
