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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const prisma_service_1 = require("../prisma/prisma.service");
const user_1 = require("../types/user");
const UserCreateInput_1 = require("../imputs/UserCreateInput");
const FindManyUserArgs_1 = require("../args/FindManyUserArgs");
const FindOneUserArgs_1 = require("../args/FindOneUserArgs");
let UserResolver = class UserResolver {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async user(args, info) {
        let fields = info.operation.selectionSet.selections[0].selectionSet.selections.map(field => field.name.value);
        if (fields.includes("role")) {
            let query = args;
            query.include = { role: true };
            return await this.prisma.user.findOne(query);
        }
        else {
            return await this.prisma.user.findOne(args);
        }
    }
    async users(args, info) {
        let fields = info.operation.selectionSet.selections[0].selectionSet.selections.map(field => field.name.value);
        if (fields.includes("role")) {
            let query = args;
            query.include = { role: true };
            return await this.prisma.user.findMany(query);
        }
        else {
            return await this.prisma.user.findMany(args);
        }
    }
    async createUser(user, info) {
        let fields = info.operation.selectionSet.selections[0].selectionSet.selections.map(field => field.name.value);
        if (fields.includes("role")) {
            return this.prisma.user.create({ data: user, include: { role: true } });
        }
        else {
            return this.prisma.user.create({ data: user });
        }
    }
};
__decorate([
    graphql_1.Query(returns => user_1.User, {
        nullable: false,
        description: undefined
    }),
    __param(0, graphql_1.Args()), __param(1, graphql_1.Info()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FindOneUserArgs_1.FindOneUserArgs, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
__decorate([
    graphql_1.Query(returns => [user_1.User], {
        nullable: false,
        description: undefined
    }),
    __param(0, graphql_1.Args()), __param(1, graphql_1.Info()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FindManyUserArgs_1.FindManyUserArgs, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    graphql_1.Mutation(returns => user_1.User, {
        nullable: false,
        description: undefined
    }),
    __param(0, graphql_1.Args("data")), __param(1, graphql_1.Info()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserCreateInput_1.UserCreateInput, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
UserResolver = __decorate([
    graphql_1.Resolver('User'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map