import { Injectable } from '@angular/core';

import { Theme } from './theme';

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
        for (let i = 0; i < 10; i++) {
            this._themes.push(
                new Theme(`Theme ${i}`)
            );
        }
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