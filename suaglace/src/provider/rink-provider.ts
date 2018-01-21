import { Injectable } from '@angular/core';

@Injectable()
export class RinkProvider {
    public rink: any;

    constructor() {
        this.rink = undefined;
    }
}
