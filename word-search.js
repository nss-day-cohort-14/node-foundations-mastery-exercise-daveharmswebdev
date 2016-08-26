'use strict'

const { Writable } = require('stream')
const fs = require('fs')
// const readStream = Readable()
const writeStream = Writable()
const limitToTen = require('./limit-to-ten')
// console.log(limitToTen)S
const [,,...args] = process.argv

if (typeof args[0] !== 'undefined') {
  const readStream = fs.createReadStream('words/en.txt')
  writeStream._write = (buffer, _, cb) => {
    let output = `writestream -- ${buffer.toString()}`
    process.stdout.write(`${output}`)
    cb()
  }
  let transStream = limitToTen.trans(args[0].toLowerCase())
  readStream.pipe(transStream).pipe(writeStream)
} else {
  console.log('Usage: word-search.js [searchterm]')
}

// function rtw(data) {
//   readStream._read = () => {
//     readStream.push(args[0].toLowerCase())
//     readStream.push(null)
//   }
//
//   let transStream = limitToTen.trans(data)
//
//   writeStream._write = (buffer, _, cb) => {
//     process.stdout.write(buffer.toString())
//     cb()
//   }
//
//   readStream.pipe(transStream).pipe(writeStream)
// }
