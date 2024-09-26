const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const route = require('./routes/userRoute.js');
const cors=require('cors');

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGOURL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB Connected Successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
app.use("/api",route);