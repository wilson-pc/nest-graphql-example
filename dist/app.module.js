"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const graphql_1 = require("@nestjs/graphql");
const path_1 = require("path");
const uud_scalar_1 = require("./scalars/uud.scalar");
const password_scalar_1 = require("./scalars/password.scalar");
const prisma_module_1 = require("./prisma/prisma.module");
const role_module_1 = require("./role/role.module");
const user_module_1 = require("./user/user.module");
const app_resolver_1 = require("./app.resolver");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [graphql_1.GraphQLModule.forRoot({
                debug: true,
                autoSchemaFile: path_1.join(process.cwd(), 'src/schema.gql'),
                playground: true,
                buildSchemaOptions: {
                    scalarsMap: [{ type: String, scalar: uud_scalar_1.BaseScalar }],
                }
            }), prisma_module_1.PrismaModule, role_module_1.RoleModule, user_module_1.UserModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, password_scalar_1.PasswordScalar, app_resolver_1.AppResolver],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map