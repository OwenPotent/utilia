import { ColorResolvable } from "../constants/constants";
declare type padding = "1" | "2" | "3" | "4" | "5";
export interface parameters {
    size?: number | 250;
    backgroundColor?: string | "38-38-38";
    qrColor?: string | "255-255-255";
    padding?: padding | "3";
    data: string;
}
interface EmbedderFieldOptions {
    name: string;
    value: string;
    inline?: boolean;
}
interface EmbedderFooterOptions {
    name: string | undefined;
    avatarURL?: string | undefined;
}
export interface EmbedderOptions {
    title?: string | undefined;
    description?: string | undefined;
    color?: string | ColorResolvable;
    footer?: EmbedderFooterOptions;
    author?: {
        name: string | undefined;
        iconURL?: string | undefined;
        url?: string | undefined;
    };
    fields?: EmbedderFieldOptions[];
    field?: EmbedderFieldOptions;
    image?: string;
    thumbnail?: string;
    timestamp?: number | Date | undefined;
    url?: string;
}
export interface loggerOptions {
    useDefault?: boolean | true;
    useCustomLabel?: {
        ready?: string;
        error?: string;
        warn?: string;
        success?: string;
    };
}
export {};
