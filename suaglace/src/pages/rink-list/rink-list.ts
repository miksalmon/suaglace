import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { RinkDetailsModal } from '../rink-details/rink-details';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-rink-list',
  templateUrl: 'rink-list.html'
})
export class RinkListPage {

  public rinks;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, private http: HTTP) {
    this.http.get('http://00242053.ngrok.io/api/info', {}, {})
    .then(data => {
      this.rinks = JSON.parse(JSON.parse(data.data));
    })
    .catch(error => {
      console.log(error);
    });
  }


  openRinkDetails(rink) {
    let modal = this.modalCtrl.create(RinkDetailsModal, rink);
    modal.onDidDismiss(rink => {
      console.log(rink);
    });
    modal.present();
  }

}
