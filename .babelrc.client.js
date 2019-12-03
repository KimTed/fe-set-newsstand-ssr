const config = require('./.babelrc.common.js');
config.presets.push([
        "@babel/preset-env",
        {
          "targets" : {ie : "9"},
          useBuiltIns: "usage",
          corejs: "3",
          modules: false
        }]
);

module.exports = config;