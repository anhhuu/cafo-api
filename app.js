const express = require('express');
const route = require('./routes/index')
const db = require('./config/db');
const cors = require('cors')
const app = express();
const port = 3333;

//Connect DB
db.connect();

app.use(cors());

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//Routes init
route(app);

app.listen(port, () => {
    console.info(`cafo-api is listening at http://localhost:${port}`);
})


/* const insertData = require('./utils/insertRawData');
insertData(); */