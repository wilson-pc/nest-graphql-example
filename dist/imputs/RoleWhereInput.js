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
var RoleWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const StringFilter_1 = require("./StringFilter");
const UserListRelationFilter_1 = require("./UserListRelationFilter");
let RoleWhereInput = RoleWhereInput_1 = class RoleWhereInput {
};
__decorate([
    graphql_1.Field(_type => [RoleWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], RoleWhereInput.prototype, "AND", void 0);
__decorate([
    graphql_1.Field(_type => [RoleWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], RoleWhereInput.prototype, "OR", void 0);
__decorate([
    graphql_1.Field(_type => [RoleWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], RoleWhereInput.prototype, "NOT", void 0);
__decorate([
    graphql_1.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], RoleWhereInput.prototype, "id", void 0);
__decorate([
    graphql_1.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], RoleWhereInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field(_type => UserListRelationFilter_1.UserListRelationFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserListRelationFilter_1.UserListRelationFilter)
], RoleWhereInput.prototype, "users", void 0);
RoleWhereInput = RoleWhereInput_1 = __decorate([
    graphql_1.InputType({
        isAbstract: true,
        description: undefined,
    })
], RoleWhereInput);
exports.RoleWhereInput = RoleWhereInput;
//# sourceMappingURL=RoleWhereInput.js.map