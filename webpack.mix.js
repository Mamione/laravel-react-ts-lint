const mix = require('laravel-mix');

const ESLintPlugin = require('eslint-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .ts('resources/js/app.tsx', 'public/js')
  .react()
  .sass('resources/sass/app.scss', 'public/css');

mix.webpackConfig({
  plugins: [
    new ESLintPlugin({
      fix: true,
      extensions: ['js', 'ts', 'tsx'],
    }),
  ],
});
