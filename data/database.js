require('dotenv').config();
let database;

const { MongoClient, ServerApiVersion } = require('mongodb');


async function connectToDatabase() {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    database = client.db('hunt');
}

function getDb() {
    if (!database) {
        throw new Error('Connect first');
    }
    return database;
}

module.exports = {
    connectToDatabase: connectToDatabase,
    getDb: getDb
};

