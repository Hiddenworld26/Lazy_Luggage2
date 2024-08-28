// import fetch from 'node-fetch';
import express from 'express';
const app = express();
const PORT = 3000;
import delhiveryRoutes from './routes/DeliveryRoutes.js';

app.use('/api', delhiveryRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// const http = require('https');

// const options = {
//   method: 'GET',
//   hostname: 'staging-express.delhivery.com',
//   port: null,
//   path: '/c/api/pin-codes/json/',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Token api-token-key Pass Token as "Token XXXXXXXXXXXXXXXXXX"'
//   }
// };

// const req = http.request(options, function (res) {
//   const chunks = [];

//   res.on('data', function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on('end', function () {
//     const body = Buffer.concat(chun
// Sarthak garg
// 16:18
// const http = require('https');

// const options = {
//   method: 'GET',
//   hostname: 'staging-express.delhivery.com',
//   port: null,
//   path: '/c/api/pin-codes/json/',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Token api-token-key Pass Token as "Token XXXXXXXXXXXXXXXXXX"'
//   }
// };

// const req = http.request(options, function (res) {
//   const chunks = [];

//   res.on('data', function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on('end', function () {
//     const body = Buffer.concat(chun
// );
//     console.log(body.toString());
//   });
// });

// req.end();

//https://delhivery-express-api-doc.readme.io/reference/testpin-codes



// const { sendOrderConfirmationEmail, sendOrderFailureEmail } = require('./mailer');
// const Order = require('../models/Order'); // Assuming you have an Order model
// const Payment = require('../services/payment'); // Assuming you have a payment service

// // Example order processing logic

// const processOrder = async (req, res) => {
//     try {
//         const { user, orderDetails, paymentInfo } = req.body;

//         // 1. Process Payment
//         const paymentSuccessful = await Payment.processPayment(paymentInfo); // Replace with your payment processing logic

//         if (paymentSuccessful) {
//             // 2. Save order details in the database
//             const newOrder = new Order({
//                 user: user._id,
//                 items: orderDetails.items,
//                 totalAmount: orderDetails.totalAmount,
//                 paymentStatus: 'Completed',
//                 paymentId: paymentSuccessful.id, // Assuming payment service returns an ID
//             });

//             await newOrder.save();

//             // 3. Send confirmation email
//             sendOrderConfirmationEmail(user.email, orderDetails);

//             // 4. Respond with success
//             return res.status(200).json({ message: 'Order placed successfully', orderId: newOrder._id });
//         } else {
//             // 5. Send failure email
//             sendOrderFailureEmail(user.email);

//             // 6. Respond with failure
//             return res.status(400).json({ message: 'Order failed due to payment issues' });
//         }
//     } catch (error) {
//         console.error('Error processing order:', error);

//         // 7. Send failure email in case of error
//         sendOrderFailureEmail(user.email);

//         // 8. Respond with internal server error
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// };

// module.exports = { processOrder };
