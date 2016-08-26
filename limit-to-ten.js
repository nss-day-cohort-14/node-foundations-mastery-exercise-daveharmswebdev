'use strict'

const { Transform } = require('stream')
const transStream = Transform()

function trans(data) {
  data = data.split('\n').length
  console.log(data)
  transStream._transform = (buffer, _, cb) => {
    cb(null, `${buffer.toString().toUpperCase()}`)
  }
  return transStream
}

module.exports = { trans }
