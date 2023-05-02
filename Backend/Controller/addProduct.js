const User = require("../Model/clientModel");
const ProductModel = require("../Model/products.model");

const AddProduct = async (req, res) => {
  const { title, category, price, quantity, status, image, farmerEmail } =
    req.body;
  try {
    const farmer = await User.findOne({ email: farmerEmail });
    const newProduct = new ProductModel({
      title,
      category,
      price,
      quantity,
      status,
      image,
      farmer: farmer._id,
    });
    const savedModel = await newProduct.save();
    if (savedModel) {
      return res.status(200).send({
        status: true,
        message: "Product Added successfully",
      });
    }
  } catch (error) {
    console.log("error", error);
    return res.send({
      status: false,
      message: `Oops an error Occured -${error}`,
    });
  }
};

module.exports = AddProduct;
