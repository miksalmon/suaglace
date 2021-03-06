import { Component } from '@angular/core';

import { RinkListPage } from '../rink-list/rink-list';
import { ProfilPage } from '../profil/profil';
import { MapPage } from '../map/map';
import { PatinoirePage } from '../patinoire/patinoire';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MapPage;
  tab2Root = RinkListPage;
  tab3Root = PatinoirePage
  tab4Root = ProfilPage;

  constructor() {

  }
}
