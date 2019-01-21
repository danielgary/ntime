#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = __importDefault(require("child_process"));
const moment_1 = __importDefault(require("moment"));
const chalk_1 = __importDefault(require("chalk"));
const ntimeArgs = process.argv;
ntimeArgs.splice(0, 2);
const command = ntimeArgs.join(' ');
const startTime = moment_1.default();
//process.stdout.write(`Process started at ${currentTime.format}`)
child_process_1.default.execSync(command, { stdio: 'inherit' });
const finishTime = new Date();
const m_finishTime = moment_1.default(finishTime);
//process.stdout.write(`Process completed at ${finishTime.toLocaleTimeString()}`)
process.stdout.write(`${chalk_1.default.bgGreen(chalk_1.default.black(' ' + command + ' '))} completed in ${m_finishTime.diff(startTime, 'seconds', true)} seconds\n`);
//# sourceMappingURL=ntime.js.map