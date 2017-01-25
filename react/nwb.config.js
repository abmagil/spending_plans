module.exports = {
  type: 'react-app',
  webpack: {
    extra: {
      devtool: 'inline-source-map'
    },
    compat: {
      sinon: true,
      enzyme: true
    }
  }
}
