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
const centra_1 = __importDefault(require("centra"));
function getInv(inviteCode, size = 64, withCounts = true) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            centra_1.default(`https://discord.com/api/v8/invites/${inviteCode}?with_counts=${withCounts}`, 'GET').send().then((result) => {
                if (result.statusCode !== 200)
                    return reject(result.statusCode);
                let answer = JSON.parse(result.body.toString());
                answer.url = answer.code ? `https://discord.com/invite/${answer.code}` : null;
            });
        }));
    });
}
exports.default = getInv;
