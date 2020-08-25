"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDistinctFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var UserDistinctFieldEnum;
(function (UserDistinctFieldEnum) {
    UserDistinctFieldEnum["id"] = "id";
    UserDistinctFieldEnum["createdAt"] = "createdAt";
    UserDistinctFieldEnum["email"] = "email";
    UserDistinctFieldEnum["name"] = "name";
    UserDistinctFieldEnum["password"] = "password";
    UserDistinctFieldEnum["roleId"] = "roleId";
})(UserDistinctFieldEnum = exports.UserDistinctFieldEnum || (exports.UserDistinctFieldEnum = {}));
graphql_1.registerEnumType(UserDistinctFieldEnum, {
    name: "UserDistinctFieldEnum",
    description: undefined,
});
//# sourceMappingURL=UserDistinctFieldEnum.js.map