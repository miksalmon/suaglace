import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';

import { FiltersProvider } from '../../provider/filters-provider';

@Component({
  selector: 'page-filters',
  templateUrl: 'filters.html'
})
export class FiltersPage {

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public filtersProvider: FiltersProvider) {

  }

  backButtonClick() {

  }

  closePage() {
    this.viewCtrl.dismiss();
    this.navCtrl.pop();
  }
}
