const express = require("express");
const app = express();
const mongoose = require("mongoose");


app.get("/",(req,res) =>{
    res.send("hii i am root");
})

// temporaty add samll db
const MONGO_URL = "mongodb://127.0.0.1:27017/insthire";

main()
.then(() => {
    console.log("connected to url");
    
}).catch((err) => {
    console.log(err);
});


async function main(){
    await mongoose.connect(MONGO_URL)
}
app.listen(8080,()=>{
    console.log("working properly port 8080");
})