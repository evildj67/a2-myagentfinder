import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
    moduleId : module.id, 
    templateUrl: 'home.template.html'
})
export class HomeComponent implements OnInit { 
    private data: Object;

    constructor(private user: UserService) {}

    ngOnInit() {
        console.log(this.user.getAgent('39c7437fa452'));
    }
}