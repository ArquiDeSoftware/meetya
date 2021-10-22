/* eslint-disable no-console */
import { port } from './config';
import app from './app';
import connectToDatabase from './db/scripts/connection-handler';

(async () => {
  try {
    await connectToDatabase();
    console.info('Connected to DB');

    app.listen(port);
    console.info(`Server listening on port ${port}`);
  } catch (err) {
    console.error(err);
  }
})();