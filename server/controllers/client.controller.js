const ProductDatabase = require("../models/Product");
const ProductStatDatabase = require("../models/ProductStat");

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
    const customers = await User.find({ role: "user" }).select("-password");
    rest.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getCustomers,
};
