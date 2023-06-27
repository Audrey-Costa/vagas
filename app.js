import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import testeRouter from './src/router/router.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set('view engine', 'jade');

app.use(
  express.json(),
  express.urlencoded(),
  express.static(__dirname + '/public'),
  testeRouter
);


const port  = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});