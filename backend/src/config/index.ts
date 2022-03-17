import dotenv from 'dotenv';

// Default 'deployment'
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (envFound.error) {
    throw new Error("Couldn't find .env file");
}

export default {
    /**
     * Port
     */
    port: parseInt(process.env.PORT, 10),

    /**
     * Database URL
     */
    databaseURL: process.env.MONGODB_URI
}