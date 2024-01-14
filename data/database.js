require('dotenv').config();
const mongodb = require('mongodb');


const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb+srv://agarwalkartik2018:4U2rDmJ9jtrtu8BO@rlandhunt.fpk6bx6.mongodb.net/?retryWrites=true&w=majority&ssl=false');
    database = client.db('hunt');
}

//atlas link

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

