import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

import { ViewLayoutPopover } from '../_parts/popovers/viewLayout/viewLayout';

import { Set } from '../../app/set/set';
import { SetService } from '../../app/set/set.service';

import { Theme } from '../../app/theme/theme';
import { ThemeService } from '../../app/theme/theme.service';

@Component({
    selector: 'page-sets',
    templateUrl: 'sets.page.html',
    // styleUrls: [ './sets.scss' ]
})
export class SetsPage {
    selectedTheme: Theme;

    get themes(): Array<Theme> {
        return this.themeService.themes;
    }

    get sets(): Array<Set> {
        return this.setService.sets;
    }

    constructor(
        public navCtrl: NavController,
        public popoverCtrl: PopoverController,
        private themeService: ThemeService,
        private setService: SetService
    ) { }

    presentPopover($event) {
        let popover = this.popoverCtrl.create(ViewLayoutPopover);
        popover.present({
            ev: $event
        });
    }

    selectTheme(theme: Theme) {
        this.selectedTheme = theme;
    }

    back() {
        this.selectedTheme = undefined;
    }

    toggleFavorite($event: TouchEvent, theme: Theme) {
        $event.preventDefault();
        $event.stopPropagation();

       this.themeService.toggleFavorite(theme);
    }

    isFavorite(theme: Theme): boolean {
        return this.themeService.favorites.indexOf(theme) > -1;
    }
}