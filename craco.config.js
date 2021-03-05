const path = require(`path`)

module.exports = {
  webpack: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    symlinks: false,
    alias: {
      'styled-components': path.resolve(
        __dirname,
        'node_modules/styled-components'
      ),
      react: path.resolve(__dirname, 'node_modules/react')
    }
  }
}
