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
exports.RoleResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const RoleCreateArgs_1 = require("../../args/RoleCreateArgs");
const role_1 = require("../../types/role");
const prisma_service_1 = require("../../prisma/prisma.service");
const RoleCreateInput_1 = require("../../imputs/RoleCreateInput");
const FindOneRoleArgs_1 = require("../../args/FindOneRoleArgs");
let RoleResolver = class RoleResolver {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async roles() {
        return this.prisma.role.findMany();
    }
    async role(args) {
        return this.prisma.role.findOne(args);
    }
    async createRole(role) {
        return this.prisma.role.create({ data: role });
    }
};
__decorate([
    graphql_1.Query(returns => [role_1.Role], {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoleResolver.prototype, "roles", null);
__decorate([
    graphql_1.Query(returns => role_1.Role, {
        nullable: false,
        description: undefined
    }),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FindOneRoleArgs_1.FindOneRoleArgs]),
    __metadata("design:returntype", Promise)
], RoleResolver.prototype, "role", null);
__decorate([
    graphql_1.Mutation(returns => role_1.Role, {
        nullable: false,
        description: undefined
    }),
    __param(0, graphql_1.Args("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RoleCreateInput_1.RoleCreateInput]),
    __metadata("design:returntype", Promise)
], RoleResolver.prototype, "createRole", null);
RoleResolver = __decorate([
    graphql_1.Resolver('Role'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RoleResolver);
exports.RoleResolver = RoleResolver;
//# sourceMappingURL=role.resolver.js.map