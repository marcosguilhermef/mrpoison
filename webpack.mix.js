const mix = require('laravel-mix');
//require('mix-env-file');

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

mix.js('resources/js/app.js', 'public/js');

mix.options({
    terser: {
        terserOptions: {
            compress: {
                drop_console: true
            }
        }
    }
});


mix.react()
    .sass('resources/sass/app.scss', 'public/css')
    .version()
;

mix.disableSuccessNotifications();
mix.disableNotifications();


//mix.env(process.env.ENV_FILE);
