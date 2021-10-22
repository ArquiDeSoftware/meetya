import dotenv from "dotenv";

dotenv.config();

const port = process.env.API_PORT ?? '9000'; // Default port
const mongo = {
  url: process.env.MONGO_URI ?? "mongodb://localhost:27017/meetya", // Default connection string
};
const secret = process.env.JWT_SECRET ?? '';

export { port, mongo, secret };
