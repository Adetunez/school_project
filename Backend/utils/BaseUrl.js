require("dotenv").config();

const BaseUrl = {
  client: "/chrsicrown_api/v1",
  admin: process.env.KH_ADMIN_VERSION_ONE,
};

module.exports = BaseUrl;
