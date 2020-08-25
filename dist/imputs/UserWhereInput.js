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
var UserWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const StringNullableFilter_1 = require("./StringNullableFilter");
const StringFilter_1 = require("./StringFilter");
const DateTimeFilter_1 = require("./DateTimeFilter");
const RoleWhereInput_1 = require("./RoleWhereInput");
let UserWhereInput = UserWhereInput_1 = class UserWhereInput {
};
__decorate([
    graphql_1.Field(_type => [UserWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], UserWhereInput.prototype, "AND", void 0);
__decorate([
    graphql_1.Field(_type => [UserWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], UserWhereInput.prototype, "OR", void 0);
__decorate([
    graphql_1.Field(_type => [UserWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], UserWhereInput.prototype, "NOT", void 0);
__decorate([
    graphql_1.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "id", void 0);
__decorate([
    graphql_1.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserWhereInput.prototype, "createdAt", void 0);
__decorate([
    graphql_1.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "email", void 0);
__decorate([
    graphql_1.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field(_type => RoleWhereInput_1.RoleWhereInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", RoleWhereInput_1.RoleWhereInput)
], UserWhereInput.prototype, "role", void 0);
__decorate([
    graphql_1.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "roleId", void 0);
UserWhereInput = UserWhereInput_1 = __decorate([
    graphql_1.InputType({
        isAbstract: true,
        description: undefined,
    })
], UserWhereInput);
exports.UserWhereInput = UserWhereInput;
//# sourceMappingURL=UserWhereInput.js.map