import { Item } from '../_shared/item/item';
// import { Themes } from '../../data/themes';

export class Theme extends Item {
    name: string;
    startDate: Date;
    endDate: Date;
    subthemes: Array<Theme>;
    logoUrl: string;

    constructor() {
        super();
    }

    deserialize(object: any): Theme {
        this.name = object.name;
        this.startDate = object.startDate;
        this.endDate = object.endDate;
        this.subthemes = null;
        this.logoUrl = object.logoUrl;

        return this;
    }

    // public static getTheme(id: number): Theme {
    //     const data = Themes.find((item) => item.id === id);

    //     return new Theme().deserialize(data);
    // }
}