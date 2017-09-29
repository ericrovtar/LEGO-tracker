import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.page.html',
    // styleUrls: [ './minifigs.scss' ]
})
export class ProfilePage {
    constructor(
        public navCtrl: NavController
    ) { }
}