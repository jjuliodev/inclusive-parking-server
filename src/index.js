const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.listen(process.env.MYSQL_PORT, () => {
     console.log(`Hello World. Port ${process.env.MYSQL_PORT}`)
})