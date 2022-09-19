import express from 'express';
import config from './config';
import campusRoutes from './routes/Campus.Routes';

const app = express();
app.set('port', config.MONGO_PORT);

app.use(campusRoutes);
export default app;