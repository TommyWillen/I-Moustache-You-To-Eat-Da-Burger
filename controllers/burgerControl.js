const express = require("express");

const router = express.Router();
// this pulls the db model for the api calls
const burger = require("../models/burger");

// this function handles the backend get request which displays the burgers with is_eaten = false in one column and is_eaten = true in another based on the handlebars files
router.get("/", (req, res) => {
    burger.all(data => {
        let unEaten = data.filter(burger => !burger.is_eaten);
        console.log(data);
        let eaten = data.filter(burger => burger.is_eaten);
        res.render("index", { unEaten: unEaten, eaten: eaten });
    });
});
// this function handles the backend posting of a new burger to the list
router.post("/api/burger", (req, res) => {
    console.log(req.body);

    const nameStr = req.body.name.split(" ").join("")
    console.log(nameStr)
    burger.create(["burger_name", "is_eaten"], [nameStr, false], (result) => {
        res.json({ id: result.insertId })
    });
});
// this function handles the backend updating of is_eaten = false to is_eaten = true
router.put("/api/burger/uneaten/:id", (req, res) => {

    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update("is_eaten = true", condition, result => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});
// this function handles the backend updating of is_eaten = true to is_eaten = false
router.put("/api/burger/eaten/:id", (req, res) => {

    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update("is_eaten = false", condition, result => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});
// this function handles the backedn updating of deleting a burger from the database
router.delete("/api/burger/:id", (req, res) => {

    const condition = req.params.id;

    console.log("condition", condition);

    burger.delete(condition, result => {
        if (result.affectedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    })
})


module.exports = router;