"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordScalar = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("graphql");
const bcrypt = require('bcrypt');
const saltRounds = 10;
let PasswordScalar = class PasswordScalar {
    constructor() {
        this.description = 'Texto hasheado con bcrypt';
    }
    parseValue(value) {
        return value;
    }
    serialize(value) {
        return value;
    }
    parseLiteral(ast) {
        if (ast.kind === graphql_2.Kind.STRING) {
            return bcrypt.hashSync(ast.value, saltRounds);
        }
        return null;
    }
};
PasswordScalar = __decorate([
    graphql_1.Scalar('Password')
], PasswordScalar);
exports.PasswordScalar = PasswordScalar;
//# sourceMappingURL=password.scalar.js.map