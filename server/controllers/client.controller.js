const ProductDatabase = require("../models/Product");
const ProductStatDatabase = require("../models/ProductStat");
const UserDatabase = require("../models/User");

const getProducts = async (req, res) => {
  try {
    const products = await ProductDatabase.find();

    const productsWithStates = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStatDatabase.find({
          productId: product._id,
        });
        return { ...product._doc, stat };
      })
    );
    res.status(200).json(productsWithStates);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getCustomers = async (req, res) => {
  try {
    const customers = await UserDatabase.find({ role: "user" }).select("-password");
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getCustomers,
};
