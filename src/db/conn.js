const mongoose = require("mongoose")

//creating a database
mongoose.connect("mongodb+srv://Naeem:NAEEM@cluster0.uznvb.gcp.mongodb.net/BusinessWebsite?retryWrites=true&w=majority" , {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "naeem"
}).then(() => {
     console.log("Connection Successfully");
}).catch((error) => {
    console.log(error);
 })