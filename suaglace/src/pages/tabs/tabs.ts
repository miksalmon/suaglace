import { Component } from '@angular/core';

import { RinkListPage } from '../rink-list/rink-list';
import { ProfilPage } from '../profil/profil';
import { MapPage } from '../map/map';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MapPage;
  tab2Root = RinkListPage;
  tab4Root = ProfilPage;

  constructor() {

  }
}
