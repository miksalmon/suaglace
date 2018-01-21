import { Component } from '@angular/core';
import { RinkProvider } from '../../provider/rink-provider';

@Component({
    selector: 'page-patinoire',
    templateUrl: 'patinoire.html'
})
export class PatinoirePage {
    constructor(public rinkProvider: RinkProvider) {
        
    }
}
