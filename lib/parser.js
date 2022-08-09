/*
 * @Author: jianting.lian
 * @LastEditors: jianting.lian
 * @Date: 2022-08-09 09:45:35
 * @LastEditTime: 2022-08-09 13:56:25
 */
const fs = require('fs')

const parser = require('@babel/parser')

const traverse = require('@babel/traverse').default

const { transformFromAst } = require('babel-core')

module.exports = {
    // 解析代码生成ast抽象语法树
    getAST: (path) => {
        const source = fs.readFileSync(path, 'utf-8')
        return parser.parse(source, {
            sourceType: 'module'
        })
    },
    // 对AST节点进行递归遍历
    getDependencies: (ast) => {
        const dependencies = []
        traverse(ast, {
            ImportDeclaration: ({node}) => {
                dependencies.push(node.source.value)
            }
        })
        return dependencies
    },
    // 将获取的ES6的AST转化成ES5
    transform: (ast) => {
        const { code } = transformFromAst(ast, null, {
            presets: ['env']
        })
        return code
    }
}