import { SortOrder } from "src/enums/SortOrder";
export declare class UserOrderByInput {
    createdAt?: keyof typeof SortOrder | undefined;
    email?: keyof typeof SortOrder | undefined;
    name?: keyof typeof SortOrder | undefined;
}
