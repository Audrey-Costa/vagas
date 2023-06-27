import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import testeRouter from './src/router/router.js';
import errorHandlerMiddleware from './src/middleware/errorHandlerMiddleware.js';
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set('view engine', 'jade');

app.use(
  express.json(),
  express.urlencoded(),
  express.static(__dirname + '/public'),
  testeRouter,
  errorHandlerMiddleware
);


const port  = process.env.PORT;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});