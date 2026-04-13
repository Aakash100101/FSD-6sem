import dbconnect from "../db.js"
const deleteOne = async () => {
    try {
        const db = await dbconnect();
        if (!db) {
            throw new Error("Database connection was not established");
        }
        const userCollection = db.collection("users");
        const filter = { name: "abc" };
        const result = await userCollection.deleteOne(filter);  
        console.log("User has been deleted successfully", result);
    } catch (error) {
        console.log("Deletion Error", error.message);
    }
}
// deleteOne();
const deleteMany = async () => {
    try {
        const db = await dbconnect();
        if (!db) {
            throw new Error("Database connection was not established");
        }
        const userCollection = db.collection("users");
        const filter = { name: "abc" };
        const result = await userCollection.deleteMany(filter);
        console.log("Users have been deleted successfully", result);
    } catch (error) {
        console.log("Deletion Error", error.message);
    }

}
// deleteMany();
const updateMany = async () => {
    try {
        const db = await dbconnect();   
        if (!db) {
            throw new Error("Database connection was not established");
        }
        const userCollection = db.collection("users");
        const filter = { name: "abc" };
        const updateDoc = {
            $set: {
                name: "xyz",
                email: "xyz@gmail.com"
            }
        };
        const result = await userCollection.updateMany(filter, updateDoc);
        console.log("Users have been updated successfully", result);
    } catch (error) {
        console.log("Update Error", error.message);
    }
}
// updateMany();

const updateone = async () => {
    try {
        const db = await dbconnect();   
        if (!db) {
            throw new Error("Database connection was not established");
        }
        const userCollection = db.collection("users");
        const filter = { name: "abc" };
        const updateDoc = {
            $set: {
                name: "xyz",
                email: "xyz@gmail.com"
            }
        };
        const result = await userCollection.updateOne(filter, updateDoc);
        console.log("User has been updated successfully", result);
    } catch (error) {
        console.log("Update Error", error.message);
    }
}
// updateone();

const findOne = async () => {
    try {
        const db = await dbconnect();   
        if (!db) {
            throw new Error("Database connection was not established");
        }
        const userCollection = db.collection("users");
        const user = await userCollection.findOne({ name: "abc" });
        console.log("User has been fetched successfully", user);
    }
    catch (error) {
        console.log("Fetch Error", error.message);
    }
}
// findOne();

const findusers = async () => {
    try {
        const db = await dbconnect();   
        if (!db) {
            throw new Error("Database connection was not established");
        }
        const userCollection = db.collection("users");
        const users = await userCollection.find({}).toArray();
        console.log("Users has been fetched successfully", users);
    } catch (error) {
        console.log("Fetch Error", error.message);
    }
}
//  findusers(); 

const insertMany = async () => {
    try {
        const db = await dbconnect();
        if (!db) {
            throw new Error("Database connection was not established");
        }
        const userCollection = db.collection("users");
        const users = [{ name: "abc1", email: "abc1@gmail.com", password: "123456", gender: "M" },
        { name: "abc2", email: "abc2@gmail.com", password: "123456", gender: "M" },
        { name: "abc3", email: "abc3@gmail.com", password: "123456", gender: "M" }
        ]
        const insertedUsers = await userCollection.insertMany(users);
        console.log("Users has been created successfully", insertedUsers.insertedIds);
    } catch (error) {
        console.log("Insertion Error", error.message);
    }
}
// insertMany();

const insertOne = async () => {
    try {
        const db = await dbconnect();
        if (!db) {
            throw new Error("Database connection was not established");
        }
        const userCollection = db.collection("users");
        const user = { name: "abc", email: "abc@gmail.com", password: "123456", gender: "M" };
        const insertedUser = await userCollection.insertOne(user);
        console.log("User has been created successfully", insertedUser.insertedId);
    } catch (error) {
        console.log("Insertion Error", error.message);
    }
}
// insertOne();