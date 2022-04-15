const express = require('express');
const router = express.Router();
const  bookController = require("../controllers/bookController")
const  userController = require("../controllers/userController")

router.post("/createUser", userController.createUser  )
router.get("/getUsersData", userController.getUsersData)

router.post("/createBook", bookController.createBook  )
router.get("/getBooksData", bookController.getBooksData)
router.post("/bookList", bookController.bookList)
router.post("/getBooksInYear", bookController.getBooksInYear)
router.post("/getParticularBooks", bookController.getParticularBooks)
router.get("/getXINRBooks", bookController.getXINRBooks)
router.get("/getRandomBooks", bookController.getRandomBooks)


const  allController = require ("../controllers/allController")

router.post("/createNewAuthor",allController.createNewAuthor)
router .post("/createNewBook",allController.createNewBooks)
router.get("/allBooks", allController.allBooks)
router.get("/updatedBookPrice",allController.updatedBookPrice )
              

module.exports = router;