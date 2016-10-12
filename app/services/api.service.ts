import { Injectable }    from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable }    from "rxjs/Observable";

@Injectable()
export class ApiService {
    private url = 'https://apibeta.agentology.com/api/v0/';
    private apiKeys = {
        api_key: '6f46b803be8ec56b3fe72e6e24d2f729f62dc83c',
        secret_key: '515492aa8f247e832b1736d51329cd785eae7f92'
    };
    private routes = {
        getAgents: 'agents/all',
        getAgent: 'agents/get/:id',
        getAgentsByName: 'agents/all/name',
        updateOpp: 'agents/update/direct/opp/:id',
        createLead: 'leads/create',
        updateLead: 'leads/update/:id'
    };
    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }         

    constructor(private http: Http) { }

    post(data: Object, route: string, id: string = '') {

        route = this.routes[route];

        if (id.length > 0)
            route = route.replace(':id', id);

        var body = JSON.stringify(Object.assign(data, this.apiKeys));

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(this.url + route, body, {headers: headers})
            .map(response => response.json())
            .catch(this.handleError);       
    }    
}