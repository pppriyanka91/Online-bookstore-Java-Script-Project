const mongoose= require('mongoose')

const bookSchema = mongoose.Schema({
    name: String,
    gener: String,
    date: Date,
    authour: String
})

const bookModel= mongoose.model('Book', bookSchema)

module.exports = bookModel