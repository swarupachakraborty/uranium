const authorModel = require('../models/authorsModel')
const bookModel = require ('../models/bookModel')

const createNewAuthor = async function(req,res){
    const reqAuthor = req.body;
    const SavedData = await authorModel.create(reqAuthor)
    res.send({msg : SavedData})

}
const createNewBooks = async function (req,res){
    const reqBook = req.body;
    const Saved = await bookModel.create(reqBook)
    res .send =({msg :Saved})

}
const allBooks = async function(req,res){
    const authorDetails =await authorModel.find({author_name:'Chetan Bhagat'})
    const id = authorDetails[0].author_id
    const booksNames=await bookModel.find({author_id: x}).select({name :1})
     res.send ({msg:booksNames})
}
const updatedBookPrice =async function (req,res){
    const bookDetails =await bookModel.find({Name:"Two states"})
    const  id = bookDetails[0].author_id
    const authorN =await authorModel.find({author_id:X}).select({author_name:1,_id:0})
    const bkName =bookDetails[0].name
    const updatedPrice=await bookModel.findOneAndUpdate({name:bkName},{Price:100},{new:true}).select({price:1,_id:0})
    res.send ({msg:authorN,updatedPrice})
}

module.exports.createNewAuthor=createNewAuthor;
module.exports.createNewBooks=createNewBooks;
module.exports.allBooks= allBooks;
module.exports.updatedBookPrice=updatedBookPrice;
