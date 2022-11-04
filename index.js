const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000;
const HOSTNAME='127.0.0.1'
const connection = require('./connection')
const Book = require('./book')
var cors = require('cors')
const app = express()

connection()
app.use(express.json());
app.use('/public', express.static(__dirname + '/public'));

var corsOptions = {
    origin: '*'
}

app.use(cors())

app.get('/', (req, res) => {
    //res.send('hello world')
    res.json('Hello from Express Server!')
    })
   
app.get('/welcome', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));

    })


app.post('/book',(req,res)=>{
    const data= new Book(req.body)
    data.save()
    .then(book=>
        {
            console.log('book saved!',book)
            res.json({sucess:true, book})
        })
    .catch(err=> console.log(err))
})
app.get("/books", async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).json(books)
    } catch (error) {
       
        res.status(400).send({ "code": 400, "method": "get", "message": error.name })
    }

})
app.listen(PORT)
console.log('Server is working on http://'+HOSTNAME +":"+ PORT)