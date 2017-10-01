export abstract class Item {
    static searchableFields: Array<string> = [ 'id' ];
    
    id: number;

    constructor() {

    }

    abstract deserialize(object: any): Item;
}