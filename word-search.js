'use strict'

const { Readable, Writable, Transform } = require('stream')
const fs = require('fs')
const readStream = Readable()
const writeStream = Writable()
const transStream = Transform()

const [,,...args] = process.argv


if (typeof args[0] !== 'undefined') {
  console.log('yeah', args[0])
} else {
  console.log('Usage: word-search.js [searchterm]')
}
