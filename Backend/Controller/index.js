const signup = require("./signup");
const login = require("./login");
const verify = require("./verifyAccount");
const addProduct = require("./addProduct");
const { getAllProducts, getProduct } = require("./getProduct");
const { editProduct, deleteProduct } = require("./editProduct");

const userController = {
  signup,
  login,
  verify,
  addProduct,
  getAllProducts,
  getProduct,
  editProduct,
  deleteProduct,
};

module.exports = userController;
