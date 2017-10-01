import { Injectable } from '@angular/core';

import { Theme } from './theme';

import { Themes } from '../../data/themes';

@Injectable()
export class ThemeService {
    private _themes: Array<Theme> = [];
    private _favorites: Array<Theme> = [];

    get themes(): Array<Theme> {
        return this._themes;
    }

    get favorites(): Array<Theme> {
        return this._favorites;
    }

    constructor() {
        this._themes = [];
        Themes.forEach((item, index) => {
            this._themes.push(
                new Theme().deserialize(item)
            );
        });
    }

    addFavorite(theme: Theme) {
        this._favorites.push(theme);
    }
    
    removeFavorite(theme: Theme) {
        const index = this._favorites.indexOf(theme);

        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    }

    toggleFavorite(theme: Theme) {
        const index = this._favorites.indexOf(theme);

        if (index > -1) {
            this.removeFavorite(theme);
        } else {
            this.addFavorite(theme);
        }
    }
}