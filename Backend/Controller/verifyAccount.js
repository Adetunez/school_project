const UserModel = require("../Model/clientModel");
const WelcomeEmail = require("../EmailTemp/welcomeEmail");

const verifyAccount = async (req, res) => {
  const { email, code } = req.body;

  const user = await UserModel.findOne({ email: email, code }); //check for user

  if (!user) res.status(200).send({ status: false, message: "Invalid OTP" }); //if no user found

  if (user) {
    //user found
    await UserModel.findOneAndUpdate(
      { email: email, code },
      { $set: { verified: true, code: "" } },
      { new: true },
      async (err, doc) => {
        if (err) {
          console.log("Something wrong when updating data!");
        } else {
          try {
            console.log("hello");
            const sendWelcome = await WelcomeEmail(doc.fullname, email);
            if (sendWelcome) {
              res.status(200).send({
                status: true,
                message: "Account verified successfully",
              });
            }
          } catch (error) {
            res
              .status(500)
              .send({ status: false, message: "verification failed" });
          }
        }
      }
    )
      .clone()
      .catch(function (err) {
        console.log(err);
      });
  }
};

module.exports = verifyAccount;
