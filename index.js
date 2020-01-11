#! /usr/bin/env node

const commander = require('commander');
const program = new commander.Command();
program
  .version('1.0.3')
  .option('-f, --foo', 'enable some foo')
  .option('-b, --bar', 'enable some bar')
  .option('-B, --baz', 'enable some baz')
  .parse(process.argv)