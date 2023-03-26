const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_URL, options)
.then(() => console.log('Connected to MongoDB...'))
.catch(err => {
    console.error('Could not connect to MongoDB...', err),
    process.exit();
});

module.exports = mongoose;
