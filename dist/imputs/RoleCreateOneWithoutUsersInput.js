"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCreateOneWithoutUsersInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const RoleCreateWithoutUsersInput_1 = require("./RoleCreateWithoutUsersInput");
const RoleWhereUniqueInput_1 = require("./RoleWhereUniqueInput");
let RoleCreateOneWithoutUsersInput = class RoleCreateOneWithoutUsersInput {
};
__decorate([
    graphql_1.Field(_type => RoleCreateWithoutUsersInput_1.RoleCreateWithoutUsersInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", RoleCreateWithoutUsersInput_1.RoleCreateWithoutUsersInput)
], RoleCreateOneWithoutUsersInput.prototype, "create", void 0);
__decorate([
    graphql_1.Field(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], RoleCreateOneWithoutUsersInput.prototype, "connect", void 0);
RoleCreateOneWithoutUsersInput = __decorate([
    graphql_1.InputType({
        isAbstract: true,
        description: undefined,
    })
], RoleCreateOneWithoutUsersInput);
exports.RoleCreateOneWithoutUsersInput = RoleCreateOneWithoutUsersInput;
//# sourceMappingURL=RoleCreateOneWithoutUsersInput.js.map