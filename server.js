const app = require('./app');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 3000;
dotenv.config();

require('./src/config/database')

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});