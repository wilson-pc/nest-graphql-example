import { UserWhereInput } from "src/imputs/UserWhereInput";
import { UserOrderByInput } from "src/imputs/UserOrderByInput";
import { UserDistinctFieldEnum } from "src/enums/UserDistinctFieldEnum";
export declare class FindManyUserArgs {
    where?: UserWhereInput | undefined;
    orderBy?: UserOrderByInput[] | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<keyof typeof UserDistinctFieldEnum> | undefined;
}
