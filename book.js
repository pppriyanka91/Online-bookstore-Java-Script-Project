const mongoose= require('mongoose')

const bookSchema = mongoose.Schema({
    name: String,
    author: String,
    genre: String,
    date: Date
})

const bookModel= mongoose.model('Book', bookSchema)

module.exports = bookModel