/*
 * @Author: jianting.lian
 * @LastEditors: jianting.lian
 * @Date: 2022-08-08 09:45:27
 * @LastEditTime: 2022-08-09 14:36:10
 */
const path = require('path')
module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    }
}