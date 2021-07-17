import { parameters } from "../types/types";
export declare class QRCode {
    private _data;
    private parametersJson;
    constructor(parameters: parameters);
    /**
     *
     * @returns the QRcode link
     */
    genQR(): string;
}
