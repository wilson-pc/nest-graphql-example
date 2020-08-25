import { Field, ArgsType } from "@nestjs/graphql";
import { UserWhereUniqueInput } from "src/imputs/UserWhereUniqueInput";

@ArgsType()
export class FindOneUserArgs {
  @Field(_type => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;
}
