const express = require('express');
const cors = require('cors')

const userRoutes = require("./src/routes/user.routes");
const storeRoutes = require("./src/routes/store.routes");
const typeRoutes = require("./src/routes/type.routes");
const orderRoutes = require("./src/routes/order.routes");
const productRoutes = require("./src/routes/product.routes");
const categoryRoutes = require("./src/routes/category.routes");

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/stores', storeRoutes);
app.use('/api/v1/types', typeRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/categories', categoryRoutes);

module.exports = app;