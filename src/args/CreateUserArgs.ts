import { ArgsType, Field } from "@nestjs/graphql"
import { RoleCreateInput } from "src/imputs/RoleCreateInput";


@ArgsType()
export declare class RoleCreateArgs  {
  @Field(_type => RoleCreateInput, { nullable: false })
    data: RoleCreateInput
  }