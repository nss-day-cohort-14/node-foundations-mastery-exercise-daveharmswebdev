'use strict'

const { Transform } = require('stream')
const transStream = Transform()

transStream._transform = (buffer, _, cb) => {
  cb(null, `${buffer.toString().toUpperCase()}`)
}

module.exports = transStream
