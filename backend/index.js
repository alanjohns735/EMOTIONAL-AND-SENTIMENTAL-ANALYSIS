const express = require('express');
require('dotenv').config()
const cors = require('cors');
const {mongoose} = require('mongoose');
const cookieParser = require('cookie-parser')



const app = express();


mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('DB connected') )
.catch((err) => console.log('DB not connected',err))


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/authRoutes') )


app.listen(process.env.port, () => console.log('Server listining on port ' +process.env.port ))