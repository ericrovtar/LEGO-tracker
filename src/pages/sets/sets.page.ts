import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { ViewLayoutPopover } from '../_parts/popovers/viewLayout/viewLayout';

import { Set } from '../../app/set/set';
import { SetService } from '../../app/set/set.service';

import { Theme } from '../../app/theme/theme';

import { SetPage } from '../set/set.page';

@Component({
    selector: 'page-sets',
    templateUrl: 'sets.page.html',
    // styleUrls: [ './sets.scss' ]
})
export class SetsPage {
    private theme: Theme;

    get sets(): Array<Set> {
        return this.setService.sets;
    }

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public popoverCtrl: PopoverController,
        private setService: SetService
    ) { 
        this.theme = this.navParams.get('theme');
    }

    presentPopover($event) {
        let popover = this.popoverCtrl.create(ViewLayoutPopover);
        popover.present({
            ev: $event
        });
    }
    
    selectSet(set: Set) {
        this.navCtrl.push(SetPage, {
            set: set
        });
    }
}