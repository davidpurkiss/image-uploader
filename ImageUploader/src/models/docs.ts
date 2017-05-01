export class Docs<T> {

    ContinuationToken: string;
    Values: Doc<T>[];

    constructor(values: T[]) {
        this.Values = values.map(v => new Doc<T>(v));
    }

}

export class Doc<T> {

    id: string;
    type: string;
    value: T;

    constructor(value: T) {
        this.value = value;
    }
}