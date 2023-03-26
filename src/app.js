const express = require('express');
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/users', userRoutes);

module.exports = app;