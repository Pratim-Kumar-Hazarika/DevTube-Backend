require('dotenv').config()
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors")
const port = 3000

const {initializeDbConnection} = require("./dbConnection/db.connection")
const {errorHandler} = require("./middlewares/errorHandler")
const {routeHandler} = require("./middlewares/routeHandler")
const userRouter = require("./routes/user.router");
const videoRouter = require("./routes/video.router");
const {sendDataToDataBase} = require("./dbConnection/sendData")

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors())
initializeDbConnection()
// sendDataToDataBase() save videos to db only once
app.get('/', (req, res) => {
  res.json('Welcome to DevTube server..')
});

app.use("/user",userRouter)
 app.use("/video",videoRouter)
app.use(errorHandler)
app.use(routeHandler)

app.listen(process.env.PORT || port, () => {
  console.log(`Server started at port ${port}!`)
});