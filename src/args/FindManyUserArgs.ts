import { ArgsType, Field,Int } from "@nestjs/graphql";
import { UserWhereInput } from "src/imputs/UserWhereInput";
import { UserOrderByInput } from "src/imputs/UserOrderByInput";
import { UserDistinctFieldEnum } from "src/enums/UserDistinctFieldEnum";

@ArgsType()
export class FindManyUserArgs {

  @Field(_type => UserWhereInput, { nullable: true })
  where?: UserWhereInput | undefined;

  @Field(_type => [UserOrderByInput], { nullable: true })
  orderBy?: UserOrderByInput[] | undefined;

  @Field(_type => Int, { nullable: true })
  take?: number | undefined;

  @Field(_type => Int, { nullable: true })
  skip?: number | undefined;

  @Field(_type => [UserDistinctFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserDistinctFieldEnum> | undefined;
}
