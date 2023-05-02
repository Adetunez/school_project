const ProductModel = require("../Model/products.model");
const paginatedData = require("../utils/paginateData");

const getAllProducts = async (req, res) => {
  const { page } = req.query;
  const products = await ProductModel.find({}).populate("farmer");
  const results = paginatedData(products, page);
  res.status(200).send(results);
};

const getProduct = async (req, res) => {
  const { farmerId, page } = req.query;
  const products = await ProductModel.find({ farmer: farmerId });
  const results = paginatedData(products, page);
  res.status(200).send(results);
};
module.exports = {
  getAllProducts,
  getProduct,
};
