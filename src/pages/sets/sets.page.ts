import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

import { ViewLayoutPopover } from '../_parts/popovers/viewLayout/viewLayout';

import { Set } from '../../app/set/set';
import { SetService } from '../../app/set/set.service';

@Component({
    selector: 'page-sets',
    templateUrl: 'sets.page.html',
    // styleUrls: [ './sets.scss' ]
})
export class SetsPage {
    get sets(): Array<Set> {
        return this.setService.sets;
    }

    constructor(
        public navCtrl: NavController,
        public popoverCtrl: PopoverController,
        private setService: SetService
    ) { }

    presentPopover($event) {
        let popover = this.popoverCtrl.create(ViewLayoutPopover);
        popover.present({
            ev: $event
        });
    }
}