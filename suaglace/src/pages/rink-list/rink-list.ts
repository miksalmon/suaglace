import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { RinkDetailsModal } from '../rink-details/rink-details';

@Component({
  selector: 'page-rink-list',
  templateUrl: 'rink-list.html'
})
export class RinkListPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController) {

  }

  openRinkDetails() {
    let modal = this.modalCtrl.create(RinkDetailsModal);
    
    modal.present();
  }

}
