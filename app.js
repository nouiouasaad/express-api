const express = require('express');
const userRoutes = require("./src/routes/user.routes");
const storeRoutes = require("./src/routes/store.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/stores', storeRoutes);

module.exports = app;