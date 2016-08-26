'use strict'

const { Readable, Writable, Transform } = require('stream')
const fs = require('fs')
const readStream = Readable()
const writeStream = Writable()
const transStream = Transform()
const limitToTen = require('./limit-to-ten')
const [,,...args] = process.argv

if (typeof args[0] !== 'undefined') {
  console.log('yeah', args[0])
  fs.readFile('words/en.txt', 'utf8', (err,data) => {
    if (err) throw err
    rtw(data)
  })
} else {
  console.log('Usage: word-search.js [searchterm]')
}

function rtw(data) {
  console.log(limitToTen(data))
}
