import * as mysql from 'mysql';
import config from 'src/config/config.js';

export const Connection = mysql.createConnection(config.mysql);
Connection.connect(err => {
  if(err) console.log(err);
});