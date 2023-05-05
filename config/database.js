const mongoose = require("mongoose");
const database = "mongodb+srv://DavidOduse:David1996%40@cluster0.pl4a4kq.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(database, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
.then(() =>
{
    console.log("Connection to database successful!");
})
.catch((error) =>
{
    console.log(error)
})