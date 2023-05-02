const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const sgMail = require("@sendgrid/mail");
const cors = require("cors");
const app = express();
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const clientRoutes = require("./Routes/clientRoutes");
const connection_string =
  process.env.ENVIRONMENT === "production"
    ? process.env.CONNECTION_STRING_LIVE
    : process.env.CONNECTION_STRING_DEV;
const PORT = process.env.ENVIRONMENT === "production" ? process.env.PORT : 4000;

//create connection to mongodb database
mongoose.set("strictQuery", true);

mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  // Start server only if connected to database
  .then(() => {
    app.listen(PORT, async () => {
      console.log("Chriscrown server started on port", PORT);
    });
  })
  .catch((e) => {
    console.log(e.message);
  });
//=================Server settings ==================
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "*", credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send({ message: "Chriscrown server" });
});

//server routes
app.use(clientRoutes);
