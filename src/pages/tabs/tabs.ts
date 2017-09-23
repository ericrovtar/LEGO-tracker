import { Component } from '@angular/core';

import { MinifigsPage } from '../minifigs/minifigs';
import { ProfilePage } from '../profile/profile';
import { SetsPage } from '../sets/sets';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SetsPage;
  tab2Root = MinifigsPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
