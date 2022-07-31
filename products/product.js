var db = require("../config/mongo-connect")

module.exports = {
    addPrduct: (product, callback) => {
        db.getDb().collection("product").insertOne(product).then((data) => {
            console.log(data)
            callback(data.insertedId.toString())
        })
    }
}