var db = require("../config/mongo-connect")
const constants = require("../config/constants")

module.exports = {
    addPrduct: (product, callback) => {
        db.getDb().collection("product").insertOne(product).then((data) => {
            console.log(data)
            callback(data.insertedId.toString())
        })
    },
    getAllProducts: () => {
        return new Promise(async(resolve, reject) => {
            let products = await db.getDb().collection(constants.product).find().toArray()
            resolve(products)
        })
    }
}