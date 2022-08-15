export class UserAccount {
    name: string;
    id: number;
    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    toSequalize(): { name: string; id: number } {
        return { name: this.name, id: this.id };
    }
}
