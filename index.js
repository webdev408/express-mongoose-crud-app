const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routes
app.use("/api/products", productRoute);
// testing server
app.get("/", (req, res) => {
  res.send("Hello from Node API server Updated!");
});
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// to get a single product
// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(201).json(product);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Something went wrong" });
//   }
// });
// update a product
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// delete a product
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// connect to mongodb
mongoose
  .connect(
    "mongodb+srv://prolific2476:koW6RbKluFxUgPPb@backenddb.gbbrrkg.mongodb.net/?retryWrites=true&w=majority&appName=backendDB"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.listen(3000, () => console.log("Server started on port 3000"));
