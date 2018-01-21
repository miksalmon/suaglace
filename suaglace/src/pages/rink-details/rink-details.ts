import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-rink-details',
  templateUrl: 'rink-details.html'
})
export class RinkDetailsPage {

  public rink;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController) {
    this.rink = viewCtrl.data;
  }

  closePage() {
    this.viewCtrl.dismiss();
    this.navCtrl.pop();
  }
}
