const mongoDbStore = require('connect-mongodb-session');
const expressSession = require('express-session');
function createSessionStore() {
    const MongoDBstore = mongoDbStore(expressSession);
    const store = new MongoDBstore({
        uri: process.env.MONGODB_URI,
        collection: 'sessions',
        databaseName: 'hunt'
    });

    return store;
}

function createSessionConfig() {
    return {
        secret: 'some-secret-value',
        resave: false,
        saveUninitialized: false,
        store: createSessionStore(),
        cookie: {
            maxAge: 1 * 24 * 60 * 60 * 1000
        }
    }
}

module.exports = createSessionConfig;
