const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
//import routes
const PostRoutes = require('./routes/posts');


//middlewares
app.use(bodyParser.json());
app.use(cors());

//route middlewares
app.use(PostRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://merncrudappthree:aneesh@mernappthree.4ntmolx.mongodb.net/crudthree?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);
mongoose.connect(DB_URL).then(()=>{
    console.log("database connection successfull");
}).catch((error)=>{
    console.log("db connection error",error);
})


app.listen(PORT,()=>console.log(`server running on port ${PORT}`));