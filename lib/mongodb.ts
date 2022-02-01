/* This is a database connection function*/
import { connect } from "mongoose";
type ConnectionT = {
  isConnected?: number;
};
const connection: ConnectionT = {}; /* creating connection object*/

async function dbConnect() {
  /* check if we have connection to our database*/
  if (connection.isConnected) {
    return;
  }

  /* connecting to our database */
  const db = await connect(process.env.MONGODB_URI);
  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
