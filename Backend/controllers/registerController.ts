const userDB={
    collection: client.db(dbName).collection('users'),

    setUsers: async function (data) {
      try {
        await this.collection.deleteMany({});
  
        await this.collection.insertMany(data);
  
        console.log('Users set successfully');
      } catch (error) {
        console.error('Error setting users:', error);
      }
    },
}