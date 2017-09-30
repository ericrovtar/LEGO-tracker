import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { Set } from '../../app/set/set';
import { SetService } from '../../app/set/set.service';

import { SetPage } from '../set/set.page';

@Component({
    selector: 'page-search',
    templateUrl: 'search.page.html',
    // styleUrls: [ './minifigs.scss' ]
})
export class SearchPage {
    searchQuery: string = '';
    items: Array<Set>;
    
    format: any;
    text: any;
    cancelled: any;
    error: any;

    constructor(
        public navCtrl: NavController,
        private barcodeScanner: BarcodeScanner,
        private setService: SetService
    ) { 
        this.initializeItems();
    }

    scanBarcode() {
        this.barcodeScanner.scan().then((barcodeData) => {
            this.format = barcodeData.format;
            this.text = barcodeData.text;
            this.cancelled = barcodeData.cancelled;
        }, (err) => {
            this.error = err;
        });
    }

    initializeItems() {
        this.items = this.setService.sets;
    }

    getItems($event: any) {
        this.initializeItems();

        this.items = this.setService.sets.filter(
            (set) => set.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
    }

    selectItem(item: Set) {
        this.navCtrl.push(SetPage, {
            set: item
        });
    }
}