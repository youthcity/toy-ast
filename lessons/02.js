const parser = require("@babel/parser");
const traverse = require("babel-traverse").default;
const core = require("@babel/core");
const t = require("babel-types");

// 访问 AST

// 期望将这个变量改值
// Example: 

/**
 * ** Before
 * function square(n) {
 *   return "abc";
 * }
 * 
 * ** After
 * function square(m) {
 *   return "abc";
 * }
 */


let source = `function square(n) {
    return n * n;
}`;

// 解析为 ast
let ast = parser.parse(source, {
    sourceType: "module",
    plugins: ["dynamicImport"]
});

// 访问者模式
const visitors = {
    Identifier() {
        console.log("Called!");
    }
};

traverse(ast, visitors);

// 可以看到执行了 四次

// console.log(ast);

// const code = core.transformFromAstSync(ast, null, {
//     configFile: false,
// }).code;

// console.log(code);