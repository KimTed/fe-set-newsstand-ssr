const merge = require('webpack-merge');
const commons = require('./webpack.common.js');


module.exports = [
    merge(commons[0], {
        mode: 'production',
        devtool: 'source-map'
    }),
    merge(commons[1], {
        mode: 'production',
        devtool: 'source-map'
    })
]
    
