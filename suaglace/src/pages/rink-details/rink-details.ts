import { HTTP } from '@ionic-native/http';
import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { PlayerListModal } from '../playerList/player-list';

import { RinkProvider } from '../../provider/rink-provider';

@Component({
  selector: 'page-rink-details',
  templateUrl: 'rink-details.html'
})
export class RinkDetailsPage {

  public rink;
  public participants;
  public user = {
    'Name': 'Samuel Chapleau',
    'PreferedPosition': 'Attaquant',
    'FavoriteRink': 'Parc Beaubien',
    'Id': '123456789'
  };

  constructor(public viewCtrl: ViewController, public http: HTTP, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public rinkProvider: RinkProvider) {
    this.rink = this.navParams.data;
    this.participants = this.http.get('http://00242053.ngrok.io/api/players/' + this.rink.Id, {}, {})
      .then(data => {
        this.participants = JSON.parse(JSON.parse(data.data));
      })
      .catch(error => {
        console.log(error);
      });
  }

  closePage() {
    this.viewCtrl.dismiss();
    this.navCtrl.pop();
  }

  joinGame() {
    this.rinkProvider.rink = this.rink;
    this.http.post('http://00242053.ngrok.io/api/rinks/' + this.rink.Id, this.user, {})
      .then(data => {
      })
      .catch(error => {
        console.log(error);
      });
  }

  openPlayers() {
    let modal = this.modalCtrl.create(PlayerListModal, {players: this.participants});
    modal.present();
  }

}
