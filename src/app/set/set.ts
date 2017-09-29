import { Theme } from '../theme/theme';
import { Upc } from '../upc/upc';

export class Set {
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

    // Rating
    // Purchase Date
    // Purchase Price
    // Purchase Location
    // Condition
    // Missing Pieces
    // Box?
    // Exclusivity
    // Photos

    constructor(
        theme: Theme, 
        subtheme: Theme,
        number: string,
        name: string
    ) {
        this.theme = theme;
        this.subtheme = subtheme;
        this.number = number;
        this.name = name;
    }

}
