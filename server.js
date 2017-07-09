import express from 'express';
import config from './webpack.config.dev';
import webpack from 'webpack';


const app         = express();
const port = process.env.PORT || 8080;
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));


const routes = require('./app/routes')(app);

app.listen(port, () => {
  console.log('Magic happens at http://localhost:' + port);
});