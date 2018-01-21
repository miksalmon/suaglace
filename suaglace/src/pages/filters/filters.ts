import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-filters',
  templateUrl: 'filters.html'
})
export class FiltersPage {

  public condition = "";
  public arrose: boolean = false;
  public deblaye: boolean = false;
  public resurface: boolean = false;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController) {
    
  }

  backButtonClick() {

  }

  closePage() {
    console.log(this.deblaye);
    this.viewCtrl.dismiss();
    this.navCtrl.pop();
  }
}
