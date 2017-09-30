import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

import { ViewLayoutPopover } from '../_parts/popovers/viewLayout/viewLayout';

import { Theme } from '../../app/theme/theme';
import { ThemeService } from '../../app/theme/theme.service';

import { SetsPage } from '../sets/sets.page';

@Component({
    selector: 'page-themes',
    templateUrl: 'themes.page.html',
    // styleUrls: [ './sets.scss' ]
})
export class ThemesPage {
    get canGoBack(): boolean {
        return this.navCtrl.canGoBack();
    }

    get themes(): Array<Theme> {
        return this.themeService.themes;
    }

    constructor(
        public navCtrl: NavController,
        public popoverCtrl: PopoverController,
        private themeService: ThemeService,
    ) { }

    presentPopover($event) {
        let popover = this.popoverCtrl.create(ViewLayoutPopover);
        popover.present({
            ev: $event
        });
    }

    selectTheme(theme: Theme) {
        this.navCtrl.push(SetsPage, {
            theme: theme
        });
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