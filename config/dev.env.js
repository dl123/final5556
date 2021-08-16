'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  APIPATH:'"http://vue-course-api.herokuapp.com"',
  APIPATH1:'"https://vue-course-api.hexschool.io"',
  CUSTOMPATH:'"banni4422"',
  //CUSTOMPATH:'"cycy001"',
})
