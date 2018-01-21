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
    this.http.get('http://c861e342.ngrok.io/api/server', {}, {})
    .then(data => {
      console.log(JSON.parse(data.data));
    })
    .catch(error => {
      console.log(error);
    });
  }


  openRinkDetails() {
    let modal = this.modalCtrl.create(RinkDetailsModal);
    modal.present();
  }

}
