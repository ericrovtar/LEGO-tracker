import { Component } from '@angular/core';

import { MinifigsPage } from '../minifigs/minifigs.page';
import { ProfilePage } from '../profile/profile.page';
import { SearchPage } from '../search/search.page'
import { SetsPage } from '../sets/sets.page';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SetsPage;
  tab2Root = MinifigsPage;
  tab3Root = SearchPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
