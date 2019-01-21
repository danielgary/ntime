#!/usr/bin/env node
import childProcess from 'child_process'
import moment from 'moment'
import chalk from 'chalk'
import yargs from 'yargs'

let ntimerArgs = yargs
  .usage(`Usage: ntimer -s <command to time>`)
  .alias('s', 'Suppress output from command')
  .alias('u', 'Units of time')

  .version()
  .boolean('s')
  .option('s')
  .choices('u', ['milliseconds', 'seconds', 'minutes', 'hours', 'days'])
  .default('u', 'seconds')
  .default('s', false).argv

const command = ntimerArgs._.join(' ')

if (!command) {
  process.stdout.write('You must provide a command to execute\n')
  process.exit(1)
}

const startTime = moment()

const stdio = ntimerArgs.s ? [undefined, undefined, undefined] : 'inherit'
const silent = ntimerArgs.s

//process.stdout.write(`Process started at ${currentTime.format}`)
childProcess.execSync(command, { stdio })
const finishTime = new Date()
const m_finishTime = moment(finishTime)
//process.stdout.write(`Process completed at ${finishTime.toLocaleTimeString()}`)
process.stdout.write(`${chalk.bgGreen(chalk.black(' ' + command + ' '))} completed in ${m_finishTime.diff(startTime, ntimerArgs.u, true)} ${ntimerArgs.u}\n`)
