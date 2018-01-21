import { HTTP } from '@ionic-native/http';
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-rink-details',
  templateUrl: 'rink-details.html'
})
export class RinkDetailsModal {

  public rink;
  public participants;
  public user = {
    'Name': 'Alain',
    'PreferedPosition': 'Forward',
    'FavoriteRink': 'Parc Beaubien',
    'Id': '123456789'
  };

  constructor(public viewCtrl: ViewController, public http: HTTP) {
    this.rink = viewCtrl.data;
    this.participants = this.http.get('http://00242053.ngrok.io/api/players', {}, {})
      .then(data => {
        this.participants = JSON.parse(JSON.parse(data.data));
      })
      .catch(error => {
        console.log(error);
      });
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  joinGame() {
    console.log(this.user);
    this.http.post('http://00242053.ngrok.io/api/rinks' + this.rink.Id, this.user, {})
      .then(data => {
      })
      .catch(error => {
        console.log(error);
      });
  }

}
