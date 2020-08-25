import { Field, ArgsType } from "@nestjs/graphql";
import { RoleWhereUniqueInput } from "src/imputs/RoleWhereUniqueInput";

@ArgsType()
export class FindOneRoleArgs {
  @Field(_type => RoleWhereUniqueInput, { nullable: false })
  where!: RoleWhereUniqueInput;
}
