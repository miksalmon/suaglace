import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-rink-details',
  templateUrl: 'rink-details.html'
})
export class RinkDetailsModal {

  constructor(public viewCtrl: ViewController) {
  }

  closeModal() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
}
