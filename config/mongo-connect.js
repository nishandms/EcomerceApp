var mongoClient = require("mongodb").MongoClient;
const state = {
    db: null
};

module.exports.connect = (done) => {
    const url = 'mongodb://localhost:27017/'
    const dbname = "ekart"

    mongoClient.connect(url, (err, data) => {
        if (err) return data(err);
        state.db = data.db(dbname);
        done()
    })
};

module.exports.getDb = () => {
    return state.db;
}