'use strict'

const { Readable, Writable } = require('stream')
const fs = require('fs')
const readStream = Readable()
const writeStream = Writable()
const limitToTen = require('./limit-to-ten')
// console.log(limitToTen)S
const [,,...args] = process.argv

if (typeof args[0] !== 'undefined') {
  fs.readFile('words/en.txt', 'utf8', (err,data) => {
    if (err) throw err
    rtw(data)
  })
} else {
  console.log('Usage: word-search.js [searchterm]')
}

function rtw(data) {
  readStream._read = () => {
    readStream.push(args[0])
    readStream.push(null)
  }

  let transStream = limitToTen.trans(data)
  
  writeStream._write = (buffer, _, cb) => {
    process.stdout.write(buffer.toString())
    cb()
  }

  readStream.pipe(transStream).pipe(writeStream)
}
