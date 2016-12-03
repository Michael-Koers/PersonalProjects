import {Component} from '@angular/core';

import {CompassPage} from '../compass/compass';
import {GpsPage} from '../gps/gps';
import {ContactPage} from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CompassPage;
  tab2Root: any = GpsPage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
