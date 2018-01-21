import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-rink-details',
  templateUrl: 'rink-details.html'
})
export class RinkDetailsModal {

  public rink;

  constructor(public viewCtrl: ViewController) {
    this.rink = viewCtrl.data;
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
