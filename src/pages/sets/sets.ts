import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

import { ViewLayoutPopover } from '../_parts/popovers/viewLayout/viewLayout';

@Component({
    selector: 'page-sets',
    templateUrl: 'sets.html',
    // styleUrls: [ './sets.scss' ]
})
export class SetsPage {
    constructor(
        public navCtrl: NavController,
        public popoverCtrl: PopoverController
    ) { }

    presentPopover($event) {
        let popover = this.popoverCtrl.create(ViewLayoutPopover);
        popover.present({
            ev: $event
        });
    }
}