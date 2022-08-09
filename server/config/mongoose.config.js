const mongoose = require('mongoose');

const dbName = 'task';

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(err))
.catch((err) => console.log(err))