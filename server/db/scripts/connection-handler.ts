import { connect } from 'mongoose';
import { mongo } from '../../config';

let connected: boolean;

const connectToDatabase = async () => {
  if (connected) {
    return;
  }
  try {
    const db = await connect(mongo.url);
    connected = db.connections[0].readyState !== 0;
    return;
  } catch (err) {
    throw new Error(err);
  }
};

export default connectToDatabase;
