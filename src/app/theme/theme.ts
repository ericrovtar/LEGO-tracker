export class Theme {
    name: string;
    startDate: Date;
    endDate: Date;
    subthemes: Array<Theme>;
    logoUrl: string;

    constructor(
        name: string
    ) {
        this.name = name;
    }
}