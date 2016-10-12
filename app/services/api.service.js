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
var http_1 = require('@angular/http');
var Observable_1 = require("rxjs/Observable");
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.url = 'https://apibeta.agentology.com/api/v0/';
        this.apiKeys = {
            api_key: '6f46b803be8ec56b3fe72e6e24d2f729f62dc83c',
            secret_key: '515492aa8f247e832b1736d51329cd785eae7f92'
        };
        this.routes = {
            getAgents: 'agents/all',
            getAgent: 'agents/get/:id',
            getAgentsByName: 'agents/all/name',
            updateOpp: 'agents/update/direct/opp/:id',
            createLead: 'leads/create',
            updateLead: 'leads/update/:id'
        };
    }
    ApiService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || ' error');
    };
    ApiService.prototype.post = function (data, route, id) {
        if (id === void 0) { id = ''; }
        route = this.routes[route];
        if (id.length > 0)
            route = route.replace(':id', id);
        var body = JSON.stringify(Object.assign(data, this.apiKeys));
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + route, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map