import app from './app';
import './database';

app.listen(app.get('port'), () => console.log('escuchando por el puerto: ', app.get('port')));
