'use strict'

const { Transform } = require('stream')
const transStream = Transform()
let i = 0
let output

transStream._transform = (buffer, _, cb) => {
  if (buffer.toString().length > 0) i++
  if (i < 11) {
    output = buffer.toString()
  } else {
    output = ''
  }
  cb(null, `${output}`)
}

module.exports = transStream
