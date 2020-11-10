import "reflect-metadata";
import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from "./routes";
import * as cors from 'cors';
import { createConnection } from "typeorm";

const app = express();
createConnection();

app.use(cors());
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3333);
app.use(routes);

app.listen(app.get('port'));
