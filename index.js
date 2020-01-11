#! /usr/bin/env node

const commander = require('commander');
const program = new commander.Command();
let { color } = require('./bin/fontStyle')
program
  .version('1.0.3')
  .parse(process.argv)

exports.default = color