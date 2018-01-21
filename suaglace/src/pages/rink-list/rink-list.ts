import { FiltersPage } from './../filters/filters';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RinkDetailsPage } from '../rink-details/rink-details';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-rink-list',
  templateUrl: 'rink-list.html'
})
export class RinkListPage {

  public rinks;

  constructor(public navCtrl: NavController, private http: HTTP) {
    this.http.get('http://dcabb22e.ngrok.io/api/info', {}, {})
    .then(data => {
      console.log(data.data);
      this.rinks = JSON.parse(JSON.parse(data.data));
    })
    .catch(error => {
      console.log(error);
    });
  }

  openFilters() {
    console.log('push');
    this.navCtrl.push(FiltersPage)
  }

  openRinkDetails(rink) {
    this.navCtrl.push(RinkDetailsPage)
  }

}
