const mongoose = require("mongoose")


const notesSchema = new mongoose.Schema({
    taskname: {type: String, required: true},
    status: {type: String, required: true},
    tag: {type: String, required: true},
    userId: {type: String, required: true}
})

const NotesModel = mongoose.model("user", notesSchema)


module.exports = NotesModel

