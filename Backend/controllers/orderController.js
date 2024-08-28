const { sendOrderConfirmationEmail } = require('../utils/mailer');
const Order = require('../models/OrderModel');

const processOrder = async (req, res) => {
    try {
        const { user, orderDetails } = req.body;

        
        const newOrder = new Order({
            user: user._id,
            items: orderDetails.items,
            totalAmount: orderDetails.totalAmount,
            paymentStatus: 'Pending',
        });

        
        await newOrder.save();

        const emailOptions = {
            email: user.email, 
            subject: 'Order Confirmation - Your Order has been Placed!',
            message: `Thank you for your order! Your order ID is ${newOrder._id}. You have ordered ${orderDetails.items.length} items totaling $${orderDetails.totalAmount}.`
        };

        
        await sendOrderConfirmationEmail(emailOptions);

       
        return res.status(200).json({ message: 'Order placed successfully', orderId: newOrder._id });
    } catch (error) {
        console.error('Error processing order:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { processOrder };

