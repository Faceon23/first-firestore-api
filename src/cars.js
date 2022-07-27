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
export function createCar(req, res) {
    // get a new car from request body
    const newCar = req.body;
    // connect to the database
    const db = dbConnect();
    // add that car to cars collection
    db.collection('cars').add(newCar)
    .then(doc => {
        res.status(201).send({
            success: true,
            id: doc.id
        })
    })
    .catch(err => res.status(500).send(err))
    // send back new doc id
}

export function updateCar(req, res) {
    let { id } = req.params
    let carToUpdate = req.body
}
// update doc (id) in cars collection using req.body
db.collection('cars')
.doc(id)
.update(carToUpdate)
.then((doc) => {
    res.status(201).send({
        success: true,
        id: doc.id,
    })
})


// this is another way to catch errors
function handleError(err,res) {
    res.status(500).send(err)
}