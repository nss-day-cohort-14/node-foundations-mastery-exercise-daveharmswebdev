'use strict'

const { Transform } = require('stream')
const transStream = Transform()

function trans(searchTerm) {
  console.log(searchTerm)
  transStream._transform = (buffer, _, cb) => {
    let output
    // if (buffer.toString().toLowerCase().slice(0, searchTerm.length) === searchTerm) {
      output = buffer.toString()
    // }
    cb(null, output)
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
