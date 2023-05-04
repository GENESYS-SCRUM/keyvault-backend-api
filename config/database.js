const mongoose = require("mongoose");
const database = process.env.DATABASE;

mongoose.connect(DB, {
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