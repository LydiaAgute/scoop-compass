module.exports = {
  semi: true, //句末使用分号
  vueIndentScriptAndStyle: false, //不对vue中的script及style标签缩进
  proseWrap: 'preserve', //markdown 文本中的换行,保持原样
  endOfLine: 'lf', //结束行形式
  bracketSpacing: true, //在对象前后添加空格-eg: { foo: bar }
  singleQuote: true, //使用单引号
  arrowParens: 'always', //单参数箭头函数参数周围使用圆括号-eg: (x) => x
  trailingComma: 'all', //多行时尽可能打印尾随逗号
  htmlWhitespaceSensitivity: 'ignore' //对HTML全局空白不敏感
};
