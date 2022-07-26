import { dbConnect } from "./dbConnect.js";


export function getAllCars(req, res) {
    // conect to db
    const db = dbConnect();
    // get all docs from the cars collection
    db.collection('cars').get()
    // reshape collection to array
    .then(collection => {
    const cars = collection.docs.map(doc => doc.data())
        // send array to response
        res.send(cars);
    })
    .catch(err => res.status(500).send(err))
}