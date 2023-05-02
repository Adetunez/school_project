const express = require("express");
const userController = require("../Controller/index");
const router = express.Router();
const BaseUrl = require("../utils/BaseUrl");
const authMiddleware = require("../Middlewares/auth");

// Regisitration
router.post(`${BaseUrl.client}/user/register`, userController.signup);

// Account verify
router.post(`${BaseUrl.client}/user/verify`, userController.verify);

// Account login
router.post(`${BaseUrl.client}/user/login`, userController.login);

// Adding Product
router.post(
  `${BaseUrl.client}/add-product`,
  authMiddleware,
  userController.addProduct
);

router.get(
  `${BaseUrl.client}/get/all-products`,
  authMiddleware,
  userController.getAllProducts
);
router.get(
  `${BaseUrl.client}/get/product`,
  authMiddleware,
  userController.getProduct
);

router.post(
  `${BaseUrl.client}/delete/product`,
  authMiddleware,
  userController.deleteProduct
);
router.post(
  `${BaseUrl.client}/edit/product`,
  authMiddleware,
  userController.editProduct
);
// // Reset password
// router.post(
//   `${BaseUrl.client}/user/reset-password`,
//   userController.resetPassword
// );
// // Change password
// router.put(
//   `${BaseUrl.client}/user/reset-password`,
//   userController.changePassword
// );

module.exports = router;
