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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
var user_service_1 = require('./services/user.service');
var header_main_component_1 = require('./header/header.main.component');
var header_home_component_1 = require('./header/header.home.component');
var footer_main_component_1 = require('./footer/footer.main.component');
var footer_home_component_1 = require('./footer/footer.home.component');
var home_component_1 = require('./home/home.component');
var contact_component_1 = require('./contact/contact.component');
var pageNotFound_component_1 = require('./pageNotFound/pageNotFound.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                header_main_component_1.HeaderMainComponent,
                header_home_component_1.HeaderHomeComponent,
                footer_main_component_1.FooterMainComponent,
                footer_home_component_1.FooterHomeComponent,
                home_component_1.HomeComponent,
                contact_component_1.ContactComponent,
                pageNotFound_component_1.PageNotFoundComponent
            ],
            providers: [
                user_service_1.UserService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map