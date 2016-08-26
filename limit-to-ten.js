'use strict'

const { Transform } = require('stream')
const transStream = Transform()

function trans(data) {
  transStream._transform = (buffer, _, cb) => {
    data = data.toLowerCase().split('\n').filter( word => {
      let searchterm = buffer.toString()
      if (searchterm === word.slice(0, searchterm.length)) {
        return word
      }
    })
    data = data.slice(0,10)
    cb(null, `${data}`)
  }
  return transStream
}

module.exports = { trans }


// transformStream._transform = (buffer, _, cb) => {
//   data = data.split('\n').filter( word => {
//     let test = buffer.toString()
//     if (test === word.slice(0, test.length)) {
//       return word
//     }
//   })
//   let output = `${data}`
//   cb(null, output)
// }
