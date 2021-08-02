require("dotenv").config({ path: "./config.env" });
const { json } = require("express");
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const productRoutes = require('./routes/productRoutes')
connectDB();

app.use(json());
app.use("api/products", productRoutes);

app.use('/', (req, res)=>{
  res.send("App working")
})

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
