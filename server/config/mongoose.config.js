const mongoose = require('mongoose');

const dbName = 'Tasks';

mongoose.connect(`mongodb://localhost/${dbName}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`connected to ${dbName} !!`))
.catch((err) => console.log(err))