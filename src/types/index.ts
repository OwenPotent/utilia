export enum lipsum {
    "lipsum",
    "lipsum1",
    "lipsum2",
    "lipsum3"
}

export interface passwordOptions {
    count?: number | 1,
    source?: lipsum | "lipsum",
    minWordLength?: number | 6,
    maxWordLength?: number | 6,
    numberOfCaps?: number,
    numberLength?: number
}

export interface pincodeOptions {
    count?: number | 1,
    min?: number | 6,
    max?: number | 6
}