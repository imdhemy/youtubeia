let mix = require('laravel-mix')

mix.js('src/background.js', 'dist').
  react('src/index.js', 'dist').
  copy('src/assets', 'dist/assets').
  copy('src/manifest.json', 'dist').
  copy('src/options.html', 'dist').
  copy('src/popup.html', 'dist').
  setPublicPath('dist')

