import { Injectable } from '@angular/core';

import { Theme } from './theme';

@Injectable()
export class ThemeService {
    private _themes: Array<Theme> = [];

    get themes(): Array<Theme> {
        return this._themes;
    }

    constructor() {
        this._themes = [];
        for (let i = 0; i < 10; i++) {
            this._themes.push(
                new Theme(`Theme ${i}`)
            );
        }
    }
}