module.exports = {
  plugins: {
    'postcss-custom-properties': {
      importFrom: './src/assets/css/base.css',
      preserve: false,
    },
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
  },
}
