import { Injectable }    from '@angular/core';
import { ApiService }    from './api.service';

@Injectable()
export class UserService {
    returnedData: Object;

    constructor(private api: ApiService) {}

    getAgents() {

    }

    getAgent(id: string)  {
        this.api.post({}, 'getAgent', id)
            .subscribe(
                data => {       
                    this.returnedData = data;  
                },
                error => console.log(error)
        ); 
    }

    getAgentsByName() {

    }

    updateOpp(id: string) {

    }

    createLead() {

    }

    updateLead(id: string) {

    }

}