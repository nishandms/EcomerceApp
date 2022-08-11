var db = require("../config/mongo-connect")
const constants = require("../config/constants")

module.exports = {
    addPrduct: (product, callback) => {
        db.getDb().collection("product").insertOne(product).then((data) => {
            callback(data.insertedId.toString())
        })
    },

    getAllProducts: () => {
        return new Promise(async(resolve, reject) => {
            let products = await db.getDb().collection(constants.product).find().toArray()
            resolve(products)
        })
    },

    removeProducts: (id) => {
        console.log(id)
        return new Promise(async(resolve, reject) => {
            let product = await db.getDb().collection(constants.product).deleteOne(id)
            resolve(product)
        })
    }
}