const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  .setOutputPath('./build')
  .setPublicPath('/')
  .addEntry('app', './app.js')
  .disableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .configureBabel((config) => {
    config.plugins.push(['@babel/plugin-proposal-decorators', { legacy: true }]);
    config.plugins.push('@babel/plugin-proposal-class-properties');
  })
  .configureBabelPresetEnv((config) => {
    config.useBuiltIns = 'usage';
    config.corejs = 3;
  })
;

module.exports = Encore.getWebpackConfig();