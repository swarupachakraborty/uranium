const req = require("express/lib/request")
const userModel = require("../models/userModel")
// const UserModel= require("../models/userModel")

const createuser= async function(req, res) {
    let p =req.body
    let c =await userModel.create(p)
    res.send({data:c})
}

const createuser2= async function(req, res) {
    let p =req.body
    let c =await userModel.create(p)
    res.send({data:c})
}



// const basicCode= async function(req, res) {
//     let tokenDataInHeaders= req.headers.token
//     console.log(tokenDataInHeaders)
//     //counter
//     console.log( "HEADER DATA ABOVE")
//     console.log( "hey man, congrats you have reached the Handler")
//     res.send({ msg: "This is coming from controller (handler)"})
    
//     }


// const createAUser = function(req, res) {
//     let requestBody = req.body
//     let headers  = req.headers
    

//     //Printing all the headers before modification - addition of a new header called 'month'
//     console.log('Request headers are before: ', headers)

//     //Accessing a request header called 'batch'
//     let batchHeader = headers["batch"] // headers.batch 
    
//     ///Accessing a request header called 'content-type'
//     let contentHeader = headers['content-type'] // headers.content-type

//     console.log('Content Type hedser is: ',contentHeader)
//     console.log('Batch header is: ', batchHeader)

//     //Adding a new requets header
//     req.headers["month"] = 'April' //req.headers.month = 'April' or req.headers["month"] = 'April'


//     //Printing the headers after modification - addition of a new header called 'month'
//     console.log('Request headers are after: ', headers)


//     console.log('Request property called current-day', req['current-day'])
    
//     //Adding a response header
//     res.header('year', '2022')

//     res.send('Just create a user')
// }

module.exports.createuser = createuser
module.exports.createuser2 = createuser2
// module.exports.basicCode = basicCode
















