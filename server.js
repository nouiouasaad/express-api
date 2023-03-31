const app = require('./app');

require('dotenv').config();
require('./src/config/db.config')

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});