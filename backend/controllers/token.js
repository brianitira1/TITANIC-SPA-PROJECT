const axios = require("axios");

let token; // Variable to store the access token obtained from Safaricom

// Middleware function to create and retrieve the access token
const createToken = async (req, res, next) => {
  const secretKey = "lk2J0CJ8nz44VYUj";
  const consumerKey = "GlczBB2hH6RPr3J0R5SuzatG76bz4ulC";
  const auth = new Buffer.from(`${consumerKey}:${secretKey}`).toString(
    "base64",
  );

  try {
    // Making a request to Safaricom's OAuth endpoint to generate a token
    const response = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        headers: {
          authorization: `Basic ${auth}`,
        },
      }
    );

    // Storing the obtained access token
    token = response.data.access_token;
    console.log("Access token obtained:", token);

    // Calling the next middleware or route handler
    next();
  } catch (error) {
    console.error("Error generating access token:", error.message);
    res.status(400).json({ error: error.message });
  }
};

// Controller function to initiate an STK push transaction
const getStkPush = async (req, res) => {
  const shortCode = 174379;
  const phone = req.body.phone.substring(1);
  const amount = req.body.amount;
  const passkey =
    "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919";
  const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";

  // Generating the timestamp and password required for the request
  const date = new Date();
  const timestamp =
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2);

  const password = new Buffer.from(shortCode + passkey + timestamp).toString(
    "base64",
  );

  // Constructing the data object for the STK push request
  const data = {
    BusinessShortCode: shortCode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: amount,
    PartyA: `254${phone}`,
    PartyB: 174379,
    PhoneNumber: `254${phone}`,
    CallBackURL: "https://mydomain.com/path",
    AccountReference: "Mpesa Test",
    TransactionDesc: "Testing stk push",
  };

  try {
    // Making a POST request to initiate the STK push transaction
    const response = await axios.post(url, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    console.log("STK push initiated successfully:", response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error initiating STK push:", error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createToken, getStkPush };
