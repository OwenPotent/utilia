export declare enum lipsum {
    "lipsum" = 0,
    "lipsum1" = 1,
    "lipsum2" = 2,
    "lipsum3" = 3
}
export interface passwordOptions {
    count?: number | 1;
    source?: lipsum | "lipsum";
    minWordLength?: number | 6;
    maxWordLength?: number | 6;
    numberOfCaps?: number;
    numberLength?: number;
}
export interface pincodeOptions {
    count?: number | 1;
    min?: number | 6;
    max?: number | 6;
}
