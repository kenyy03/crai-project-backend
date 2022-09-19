import express from 'express';
import morgan from 'morgan';
import config from './config';
import campusRoutes from './routes/Campus.Routes';

const app = express();
app.set('port', config.MONGO_PORT);

app.use(morgan('dev'));

app.use(campusRoutes);
export default app;