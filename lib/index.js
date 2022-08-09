/*
 * @Author: jianting.lian
 * @LastEditors: jianting.lian
 * @Date: 2022-08-09 09:45:30
 * @LastEditTime: 2022-08-09 14:38:18
 */
const Compiler = require('./compiler')

const options = require('../minipack.config')

new Compiler(options).run()