import { registerEnumType } from "@nestjs/graphql";

export enum UserDistinctFieldEnum {
    id = "id",
    createdAt = "createdAt",
    email = "email",
    name = "name",
    password = "password",
    roleId = "roleId"
  }
  registerEnumType(UserDistinctFieldEnum, {
    name: "UserDistinctFieldEnum",
    description: undefined,
  });
  