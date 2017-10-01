import { Injectable } from '@angular/core';

import { Set } from './set';

import { Sets } from '../../data/sets';

@Injectable()
export class SetService {
    private _sets: Array<Set> = [];

    get sets(): Array<Set> {
        return this._sets;
    }

    constructor() {
        this._sets = [];
        Sets.forEach((item) => {
            this._sets.push(new Set().deserialize(item))
        });
    }
}