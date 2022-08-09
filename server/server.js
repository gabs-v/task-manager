const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(
    cors({
        ordgin: 'http://localhost:3000'
    })
);

require('./config/mongoose.config')
//require routes


app.listen(8000, () => {
    console.log('Listening on port 8000!')
})