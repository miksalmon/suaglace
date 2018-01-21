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

  constructor(public viewCtrl: ViewController, public http: HTTP) {
    this.rink = viewCtrl.data;
    this.participants = this.http.get('http://dcabb22e.ngrok.io/api/players', {}, {})
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
}
