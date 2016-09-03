'use strict'

const { Writable } = require('stream')
const fs = require('fs')
const es = require('event-stream')
const writeStream = Writable()
const transStream = require('./limit-to-ten')
// console.log(limitToTen)S
const [,,...args] = process.argv

function search() {
  const searchTerm = args[0].toLowerCase()
  const readStream = fs.createReadStream('words/en.txt')
  .pipe(es.split())
  .pipe(es.map((line, cb) => {
    if (line.toLowerCase().slice(0,searchTerm.length) !== searchTerm) {
      line = ''
    } else {
      line += '\n'
    }
    cb(null, line)
  }))
  .pipe(transStream)
  .pipe(writeStream)

  // writestream code
  writeStream._write = (buffer, _, cb) => {
    let output = `${buffer.toString()}`
    process.stdout.write(`${output}`)
    cb()
  }
}

if (typeof args[0] !== 'undefined') {
  search()
} else {
  process.stdin.setEncoding('utf8')
  process.stdin.once('readable', () => {
    let chunk = process.stdin.read()
    if (typeof chunk === 'string') {
      process.stdout.write(chunk)
      if (typeof args[0] !== 'undefined') {
        search()
      }
    } else {
      console.log('Usage: word-search.js [searchterm]')
    }
  })
}