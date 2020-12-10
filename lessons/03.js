// 修改 AST

const parser = require("@babel/parser");
const traverse = require("babel-traverse").default;
const core = require("@babel/core");
const t = require("babel-types");

// 任务：删除所有的注释
let source = `function square(n) {
    console.log('delete me.....');
    return "abc";
}`;

// 解析为 ast
let ast = parser.parse(source, {
    sourceType: "module",
    plugins: ["dynamicImport"]
});

traverse(ast, {
    MemberExpression(path ,state) {
        path.remove();
    }
});

// console.log(ast);

const code = core.transformFromAstSync(ast, null, {
    configFile: false,
}).code;

console.log(code);