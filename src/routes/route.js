const express = require('express');
const router = express.Router();
const {route} = require('...express/lib/application');
const batchController= require("../controllers/batchController")
const developerController=require("../controllers/developerController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createbatches", batchController.createbatches  )
router.post("/createdevelopers",developerController.createdevelopers)
router.get("/scholarship",developerController.scholarship)
router.get("/developers",developerController.developers)





module.exports = router;