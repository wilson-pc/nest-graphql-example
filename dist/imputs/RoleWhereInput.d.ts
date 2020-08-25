import { StringFilter } from "./StringFilter";
import { UserListRelationFilter } from "./UserListRelationFilter";
export declare class RoleWhereInput {
    AND?: RoleWhereInput[] | undefined;
    OR?: RoleWhereInput[] | undefined;
    NOT?: RoleWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    users?: UserListRelationFilter | undefined;
}
