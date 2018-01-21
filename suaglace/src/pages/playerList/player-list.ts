import { FiltersPage } from './../filters/filters';
import { Component } from '@angular/core';
import { RinkDetailsPage } from '../rink-details/rink-details';
import { HTTP } from '@ionic-native/http';

import { FiltersProvider } from '../../provider/filters-provider';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ViewController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'page-player-list',
  templateUrl: 'player-list.html'
})
export class PlayerListModal {
  public playerList;
  constructor(public modalCtrl: ModalController, public viewCtrl: ViewController, params: NavParams) {
    this.playerList = params.get('players');
  }

  closePage() {
    this.viewCtrl.dismiss();
  }

}
