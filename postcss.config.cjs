module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['> 1%', 'last 2 versions', 'not dead'],
    },
    'postcss-pxtorem': {
      rootValue: 100,
      propList: ['*'],
      minPixelValue: 2,
      mediaQuery: false,
      exclude: /node_modules/i,
    },
  },
};
