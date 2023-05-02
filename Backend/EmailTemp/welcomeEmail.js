const sgMail = require("@sendgrid/mail");
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const WelcomeEmail = async (fullname, email) => {
  const msg = {
    to: email,
    from: "adeyemoitunu12@gmail.com", // Use the email address or domain you verified above
    subject: "Chrsicrown Farm congratulations 🎉🎉",
    text: "ChirscrownFarm",
    html: `
    <p>Congratulations ${fullname} 🎉🎉</p>
    <p>Your account has been verified successfully.
    <p>Welcome to ChrsicrownFarm, You can proceed to <b><a href="#">Login</a></b>
    to enjoy the platform awesome features.
    </p>
    </p>
    `,
  };

  let result = await sgMail.send(msg).then(
    () => {
      return true;
    },
    (error) => {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
        return false;
      } else {
        return true;
      }
    }
  );
  return result;
};

module.exports = WelcomeEmail;
