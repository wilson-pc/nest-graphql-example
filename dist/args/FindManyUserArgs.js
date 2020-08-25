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
exports.FindManyUserArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const UserWhereInput_1 = require("../imputs/UserWhereInput");
const UserOrderByInput_1 = require("../imputs/UserOrderByInput");
const UserDistinctFieldEnum_1 = require("../enums/UserDistinctFieldEnum");
let FindManyUserArgs = class FindManyUserArgs {
};
__decorate([
    graphql_1.Field(_type => UserWhereInput_1.UserWhereInput, { nullable: true }),
    __metadata("design:type", UserWhereInput_1.UserWhereInput)
], FindManyUserArgs.prototype, "where", void 0);
__decorate([
    graphql_1.Field(_type => [UserOrderByInput_1.UserOrderByInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyUserArgs.prototype, "orderBy", void 0);
__decorate([
    graphql_1.Field(_type => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyUserArgs.prototype, "take", void 0);
__decorate([
    graphql_1.Field(_type => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyUserArgs.prototype, "skip", void 0);
__decorate([
    graphql_1.Field(_type => [UserDistinctFieldEnum_1.UserDistinctFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindManyUserArgs.prototype, "distinct", void 0);
FindManyUserArgs = __decorate([
    graphql_1.ArgsType()
], FindManyUserArgs);
exports.FindManyUserArgs = FindManyUserArgs;
//# sourceMappingURL=FindManyUserArgs.js.map