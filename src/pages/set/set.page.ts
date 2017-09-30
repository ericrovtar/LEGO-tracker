import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { ViewLayoutPopover } from '../_parts/popovers/viewLayout/viewLayout';

import { Set } from '../../app/set/set';

class keyPair {
    key: string;
    value: any;
}

@Component({
    selector: 'page-set',
    templateUrl: 'set.page.html',
    // styleUrls: [ './sets.scss' ]
})
export class SetPage {
    private set: Set;

    get properties(): Array<keyPair> {
        const keyPairs = new Array<keyPair>();

        Object.keys(this.set).forEach(function(key, index) {
            // key: the name of the object key
            // index: the ordinal position of the key within the object 
            const pair = new keyPair();
            
            pair.key = key;
            // pair.value = this.set[key];
        });

        return keyPairs;
    }

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public popoverCtrl: PopoverController,
    ) { 
        this.set = this.navParams.get('set');
    }

    presentPopover($event) {
        let popover = this.popoverCtrl.create(ViewLayoutPopover);
        popover.present({
            ev: $event
        });
    }
}