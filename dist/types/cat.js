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
exports.Cat = void 0;
const graphql_1 = require("@nestjs/graphql");
const password_scalar_1 = require("../scalars/password.scalar");
const country_1 = require("./country");
let Cat = class Cat {
};
__decorate([
    graphql_1.Field(type => graphql_1.ID),
    __metadata("design:type", Number)
], Cat.prototype, "id", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Cat.prototype, "name", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Cat.prototype, "lastName", void 0);
__decorate([
    graphql_1.Field(type => password_scalar_1.PasswordScalar, { nullable: true }),
    __metadata("design:type", String)
], Cat.prototype, "password", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", country_1.Country)
], Cat.prototype, "country", void 0);
Cat = __decorate([
    graphql_1.ObjectType()
], Cat);
exports.Cat = Cat;
//# sourceMappingURL=cat.js.map