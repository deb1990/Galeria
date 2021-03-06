var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './public/src/app/app.js',
    output: { path: __dirname, filename: 'public/src/bundle.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    }
};