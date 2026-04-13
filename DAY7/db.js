import { MongoClient } from "mongodb";
const url = "mongodb+srv://aakash:abes@crud.nq4q1ur.mongodb.net/?appName=CRUD";
const DB_NAME = "users";
const client = new MongoClient(url, {
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 5000,
});
const dbconnect = async () => {
    try {
        await client.connect();
        console.log("DB is connected successfully");
        return client.db(DB_NAME);
    } catch (error) {
        console.log("Error connecting to DB:", error.message);
        throw error;
    }
};
export default dbconnect;
// dbconnect();