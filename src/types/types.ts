import { ColorResolvable, EmbedAuthorOptions, EmbedFooterOptions } from "discord.js";

type padding = "1" | "2" | "3" | "4" | "5"
export type ExtraEmbedColor = ColorResolvable | 'Default';

export interface parameters {
    size?: number | 250,
    backgroundColor?: string | "38-38-38",
    qrColor?: string | "255-255-255",
    padding?: padding | "3",
    data: string
}

export interface loggerOptions {
    useDefault?: boolean | true,
    useCustomLabel?: {
        ready?: string,
        error?: string,
        warn?: string,
        success?: string
    }
}

export interface ExtraEmbedOptions {
    timestamp?: boolean;
    author?: {
        data: EmbedAuthorOptions
    };
    footer?: {
        data: EmbedFooterOptions
    };
    codeblocks?: {
        language?: string;
    };
}

