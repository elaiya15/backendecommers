  const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const registerRouter = require("./router/registerRouter");
const auth = require("./modules/authModule");
const mongo = require("./connect");
dotenv.config();
mongo.connect();
const app = express();
// to parse req.body, to send the req.body from client to server
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
 res.send({server:" runing good"});
  
});
app.use("/register", registerRouter);



// app.listen(process.env.PORT);
app.listen(process.env.PORT||5000,()=>{
    console.log("Server is running on port",process.env.PORT)
});

