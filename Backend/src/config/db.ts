import mongoose from 'mongoose';

async function connectToMongoDB() {
  try {
    const mongodbUri = process.env.MONGODB_URI;

    if (!mongodbUri) {
      throw new Error('MONGODB_URI environment variable is not set');
    }

    await mongoose.connect(mongodbUri);
    console.log('Connected to MongoDB');
  } catch (error:any) {
    console.error('Error connecting to MongoDB:', error.message);
    throw error;
  }
}

export default connectToMongoDB;
