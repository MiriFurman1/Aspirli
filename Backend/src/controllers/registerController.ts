import mongoose from "mongoose";

const usersDB = {
  users: [],

  setUsers: async function () {
    try {
      const collection = mongoose.connection.collection('users');

      // Convert the cursor to an array using the toArray method
      const cursor = collection.find({});
      const users = await cursor.toArray();

      // Log the documents
      console.log(users);
    } catch (error) {
      console.error('Error retrieving users from MongoDB:', error);
    }
  }
};

export default usersDB;
