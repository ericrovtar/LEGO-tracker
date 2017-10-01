import { Theme } from '../theme/theme';
import { Upc } from '../upc/upc';

export class Set {
    static searchableFields: Array<string> = [
        'number',
        'name',
        'upc'
    ];
    
    id: number;
    theme: Theme;
    subtheme: Theme;

    number: string;
    name: string;
    description: string;
    minifigs: Array<any>;
    releaseDate: Date;
    upc: Upc;
    msrp: number;
    pieces: number;
    availability: Array<any>;
    photoUrls: Array<string>;

    // Rating
    // Purchase Date
    // Purchase Price
    // Purchase Location
    // Condition
    // Missing Pieces
    // Box?
    // Exclusivity
    // Photos

    constructor() {
    }

    deserialize(object: any): Set {
        this.theme = new Theme().deserialize(object.theme);
        this.subtheme = new Theme().deserialize(object.subtheme);
        this.number = object.number;
        this.name = object.name;
        this.description = object.description;
        this.minifigs = object.minifigs;
        this.releaseDate = object.releaseDate;
        this.upc = object.upc;
        this.msrp = object.msrp;
        this.pieces = object.pieces;
        this.availability = object.availability;
        this.photoUrls = object.photoUrls;

        return this;
    }
}
