import { FiltersPage } from './../filters/filters';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RinkDetailsPage } from '../rink-details/rink-details';
import { HTTP } from '@ionic-native/http';

import { FiltersProvider } from '../../provider/filters-provider';

@Component({
  selector: 'page-rink-list',
  templateUrl: 'rink-list.html'
})
export class RinkListPage {

  public rinks = [];

  constructor(public navCtrl: NavController, private http: HTTP, public filtersProvider: FiltersProvider) {
    this.http.get('http://00242053.ngrok.io/api/info', {}, {})
      .then(data => {
        this.rinks = JSON.parse(JSON.parse(data.data));
      })
      .catch(error => {
        console.log(error);
      });
  }

  openFilters() {
    this.navCtrl.push(FiltersPage);
  }

  openRinkDetails(rink) {
    this.navCtrl.push(RinkDetailsPage, rink);
  }

  getRinks() {
    let rinks = this.rinks;

    if (this.filtersProvider.arrose) {
      rinks = rinks.filter(rink => rink.Arrose);
    }

    if (this.filtersProvider.deblaye) {
      rinks = rinks.filter(rink => rink.Deblaye);
    }

    if (this.filtersProvider.resurface) {
      rinks = rinks.filter(rink => rink.Resurface);
    }

    if (this.filtersProvider.condition === "Excellente") {
      rinks = rinks.filter(rink => rink.Condition === "Excellente");
    } else if (this.filtersProvider.condition === "Bonne") {
      rinks = rinks.filter(rink => rink.Condition === "Excellente" || rink.Condition === "Bonne");
    }

    return rinks
  }

}
