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
exports.RoleCreateWithoutUsersInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let RoleCreateWithoutUsersInput = class RoleCreateWithoutUsersInput {
};
__decorate([
    graphql_1.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], RoleCreateWithoutUsersInput.prototype, "id", void 0);
__decorate([
    graphql_1.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], RoleCreateWithoutUsersInput.prototype, "name", void 0);
RoleCreateWithoutUsersInput = __decorate([
    graphql_1.InputType({
        isAbstract: true,
        description: undefined,
    })
], RoleCreateWithoutUsersInput);
exports.RoleCreateWithoutUsersInput = RoleCreateWithoutUsersInput;
//# sourceMappingURL=RoleCreateWithoutUsersInput.js.map