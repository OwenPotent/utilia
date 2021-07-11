import * as mongoose from "mongoose";
export declare class Utils {
    shorten(text: string, maxLen?: number): string;
    randomNumber(min: number, max: number): number;
    shuffleArray(array: string[]): string[];
    removeDuplicated(array: string[]): string[];
    list(array: string[], conjuction?: string): string;
    sort(array: string[]): string[];
    firstUpperCase(text: string, split?: string): string;
    formatNumber(number: string, minimumFractionDigits?: number): string;
    createHash(text: string, algorithm: string): string;
    formatBytes(bytes: number): string;
    createId(length?: number): string;
    formatDays(unicode: number): string;
    mongoConnect(url: string): Promise<typeof mongoose>;
}
