const app = require('./src/app');

require('dotenv').config();
require('./src/config/database')

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});