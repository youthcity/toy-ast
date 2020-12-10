const parser = require("@babel/parser");

// 根据代码获取 AST （代码 -> AST）

let source = `function square(n) {
    return "abc";
}`;

// 解析为 ast
let ast = parser.parse(source, {
    sourceType: "module",
    plugins: ["dynamicImport"]
});

console.log(ast);