'use strict'

const jao = require('./index')
const pass = (msg) => console.log(`Pass - ${msg}`)
const fail = (msg) => {
  console.error(new Error(`Fail - ${msg}`))
  return process.exit(1)
}
let t

t = 'It is an Object'
Object.prototype.toString.call(jao) === '[object Object]' ? pass(t) : fail(t)

t = 'It has no additional properties'
!Object.getOwnPropertyNames(jao).length ? pass(t) : fail(t)
