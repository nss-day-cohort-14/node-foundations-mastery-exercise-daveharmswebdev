'use strict'

const { Readable, Writable, Transform } = require('stream')
const fs = require('fs')
const readStream = Readable()
const writeStream = Writable()
const transStream = Transform()

const [,,...args] = process.argv

console.log(args[0])
