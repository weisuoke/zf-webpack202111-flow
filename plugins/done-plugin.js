class DonePlugin {
  // 应用此插件，参数就是 Compiler 对象实例
  apply(compiler) {
    compiler.hooks.done.tap('DonePlugin', () => {
      console.log('done：结束编译')
    })
  }
}

module.exports = DonePlugin;