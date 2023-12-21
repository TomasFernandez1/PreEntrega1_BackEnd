import express from "express";
import productsRoute from './routes/products.routes.js';
import cartsRoute from './routes/carts.routes.js';

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api", productsRoute)
app.use("/api", cartsRoute);

app.listen(8080, () => {
  console.log("Listening port 8080");
});
