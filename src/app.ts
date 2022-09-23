import express from 'express';
import morgan from 'morgan';
import config from './config';
import cors from 'cors';
import campusRoutes from './routes/Campus.Routes';

const app = express();
app.set('port', config.MONGO_PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(campusRoutes);
export default app;