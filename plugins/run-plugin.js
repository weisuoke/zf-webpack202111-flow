class RunPlugin {
  // 应用此插件，参数就是 Compiler 对象实例
  apply(compiler) {
    compiler.hooks.run.tap('RunPlugin', () => {
      console.log('run：开始编译')
    })
  }
}


module.exports = RunPlugin;