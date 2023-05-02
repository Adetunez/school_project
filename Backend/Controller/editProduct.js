const ProductModel = require("../Model/products.model");

const editProduct = async (req, res) => {
  const { id } = req.body;
  try {
    const editedProduct = await ProductModel.findByIdAndDelete({ _id: id });
    if (editedProduct) {
      return res.status(200).send({
        status: true,
        message: "Product Edited successfully",
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
const deleteProduct = async (req, res) => {
  const { id } = req.body;
  try {
    const deleteProduct = await ProductModel.findByIdAndDelete({ _id: id });
    if (deleteProduct) {
      return res.status(200).send({
        status: true,
        message: "Product Deleted successfully",
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

module.exports = { deleteProduct, editProduct };
