#!/usr/bin/env node
import childProcess from 'child_process'
import moment from 'moment'
import chalk from 'chalk'

const ntimeArgs = process.argv
ntimeArgs.splice(0, 2)

const command = ntimeArgs.join(' ')

const startTime = moment()

//process.stdout.write(`Process started at ${currentTime.format}`)
childProcess.execSync(command, { stdio: 'inherit' })
const finishTime = new Date()
const m_finishTime = moment(finishTime)
//process.stdout.write(`Process completed at ${finishTime.toLocaleTimeString()}`)
process.stdout.write(`${chalk.bgGreen(chalk.black(' ' + command + ' '))} completed in ${m_finishTime.diff(startTime, 'seconds', true)} seconds\n`)
