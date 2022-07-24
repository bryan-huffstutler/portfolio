import mongoose from 'mongoose'

const connection = {};

async function blogDbConnect() {
    if(connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_URI_BLOG, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected)
}

export default blogDbConnect;