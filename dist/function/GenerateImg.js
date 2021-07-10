"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateImg = void 0;
const axios_1 = __importDefault(require("axios"));
const url_json_1 = require("../config/url.json");
/**
 *
 * Generates an image from the given image type
 *
 * @returns
 */
function generateImg(imageType) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!imageType)
            throw new TypeError("Please specify an image type to generate the image!");
        switch (imageType) {
            case "cat":
                const cat = yield axios_1.default.get(url_json_1.catUrl).then((res) => {
                    return res.data.url;
                }).catch((err) => {
                    console.error(err);
                });
                if (!cat) {
                    return console.error("Could not find any available data.");
                }
                else {
                    return cat;
                }
            case "dog":
                const dog = yield axios_1.default.get(url_json_1.dogUrl).then((res) => {
                    return res.data.url;
                }).catch((err) => {
                    console.error(err);
                });
                if (!dog) {
                    return console.error("Could not find any available data.");
                }
                else {
                    return dog;
                }
            case "neko":
                const neko = yield axios_1.default.get(url_json_1.nekoUrl).then((res) => {
                    return res.data.url;
                }).catch((err) => {
                    console.error(err);
                });
                if (!neko) {
                    return console.error("Could not find any available data.");
                }
                else {
                    return neko;
                }
            case "waifu":
                const waifu = yield axios_1.default.get(url_json_1.waifuUrl).then((res) => {
                    return res.data.url;
                }).catch((err) => {
                    console.error(err);
                });
                if (!waifu) {
                    return console.error("Could not find any available data.");
                }
                else {
                    return waifu;
                }
            default: throw new Error("Please specify a correct type");
        }
    });
}
exports.generateImg = generateImg;
