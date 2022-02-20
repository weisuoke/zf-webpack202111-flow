const webpack = require('./webpack');
const options = require('./webpack.config')
const compiler = webpack(options);

// 4. 执行对象的 run 方法开始编译
compiler.run((err, stats) => {
  console.log(stats.toJson())
})