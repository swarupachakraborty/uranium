const authorModel = require("../models/authorModel")
const AuthorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const BookModel = require("../models/bookModel")
const PublisherModel = require("../models/publishermodel")

const createBook = async function (req, res) {

    const data = req.body
    if (!data.author_id || data.author_id == "") {
        res.send("author id is requird")
    } else {
        const validauthor_id = await AuthorModel.findOne({ _id: data.author_id }).then((success) => { return success !== null ? true : false }, (error) => { return false })
        if (!validauthor_id) {
            res.send("Invalid Author ID");
        } else {
            if (!data.publisher || data.publisher == "") {
                res.send("publisher id is requird")
            } else {
                const validpublisher = await PublisherModel.findOne({ _id: data.publisher }).then((success) => { return success === null ? false : true }, (error) => { return false })
                if (!validpublisher) {
                    res.send("Invalid publisher ID");
                } else {
                    let SaveData = await bookModel.create(data)
                    res.send({ msg: SaveData });
                }
            }
        }
    }


}

const getBooksData= async function (req, res) {
    let books = await BookModel.find()
    res.send({data: books})
}
const getBooksWithAuthorDetails = async function (req, res) {
    
    let specificBook = await BookModel.find().populate('author_id').populate('publisher_id')
    res.send({data: specificBook})
}

const books= async function (req, res) {
    let b = await BookModel.updateMany(
        {publisher_id : {$in : ["62590dced7937ca911caf8e3","62590cacd7937ca911caf8db"]}},
            {$set : {HardCover :true}}  ,
    )
   

    let a = await BookModel.updateMany(
        {ratings:{$gt:3.5}},
        {$inc:{price:10}}
)
    res.send({data:b})
}

    const book= async function (req, res) {
      
                let a = await BookModel.updateMany(
                    {ratings:{$gt:3.5}},
                    {$inc:{price:10}}
        )
        res.send({data:a})
                }           






module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getBooksWithAuthorDetails=getBooksWithAuthorDetails
module.exports.books = books
module.exports.book = book