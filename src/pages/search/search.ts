import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
    selector: 'page-search',
    templateUrl: 'search.html',
    // styleUrls: [ './minifigs.scss' ]
})
export class SearchPage {
    format: any;
    text: any;
    cancelled: any;
    error: any;

    constructor(
        public navCtrl: NavController,
        private barcodeScanner: BarcodeScanner
    ) { }

    scanBarcode() {
        this.barcodeScanner.scan().then((barcodeData) => {
            this.format = barcodeData.format;
            this.text = barcodeData.text;
            this.cancelled = barcodeData.cancelled;
        }, (err) => {
            this.error = err;
        });
    }
}