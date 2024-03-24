require('dotenv').config();
let database;

const { MongoClient, ServerApiVersion } = require('mongodb');


async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb://0.0.0.0:27017');
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

