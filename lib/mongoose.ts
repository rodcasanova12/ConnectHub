import mongoose from 'mongoose';

let isConnected = false; // variable to check if mongoose is connected


export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log('MONGODB_URL not found');
    if(isConnected) return console.log('Mongoose is already connected');

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true;

        console.log('Mongoose connected');
    } catch (error) {
        console.log('Mongoose connection error: ', error);
    }
}