import mongooseLoader from './mongoose';

export default async ({ expressApp }) => {
    const mongoConnection = await mongooseLoader();
    console.log('MongoDB loaded and connected!');
}