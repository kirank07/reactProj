import mongoose from 'mongoose';
mongoose.set('strictQuery', false);
const Connection = async (username,password) => {
    //console.log(mongoose.version)
    const uri = `mongodb+srv://${username}:${password}@devconnector.jm00h.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(uri,{ useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connection successfully');
    } catch (error) {
        console.log ('Error while connecting database!', error);
    }
}

export default Connection;
