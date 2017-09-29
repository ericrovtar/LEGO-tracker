import { Injectable } from '@angular/core';

import { Set } from './set';
import { Theme } from '../theme/theme';

@Injectable()
export class SetService {
    private _sets: Array<Set> = [];

    get sets(): Array<Set> {
        return this._sets;
    }

    constructor() {
        const theme = new Theme('Star Wars');

        this._sets = [];
        for (let i = 0; i < 10; i++) {
            this._sets.push(
                new Set(
                    theme,
                    null,
                    `${i}${i}${i}${i}`,
                    `Set ${i}`
                )
            );
        }
    }
}