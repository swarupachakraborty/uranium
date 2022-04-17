const express = require('express');
const router = express.Router();


const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publishercontroller=require("../controllers/publishercontroller")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post("/createAuthor", authorController.createAuthor  )

router.post("/createPublisher", publishercontroller.createPublisher  )
router.get ("/getBooksData", bookController.getBooksData) 

router.post("/createBook", bookController.createBook  )

router.put("/books",bookController.books)

router.put("/book",bookController.book)



module.exports =router;
