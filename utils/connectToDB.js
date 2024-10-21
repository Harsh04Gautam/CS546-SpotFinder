import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: `./config/${process.env.NODE_ENV}.env` });

export async function connectToDB() {
  try {
    if (process.env.NODE_ENV === "development") {
      mongoose.createConnection(process.env.dbURI).dropDatabase();
    }

    await mongoose.connect(process.env.dbURI);
    console.log("DataBase connection successful");
  } catch (e) {
    console.error("DataBase connection failed");
    console.error(e);
    process.exit(1);
  }
}

export default connectToDB;
