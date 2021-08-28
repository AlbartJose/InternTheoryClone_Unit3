const express = require('express');
const Razorpay = require('Razorpay'); 
  
const razorpayInstance = new Razorpay({
    key_id: "rzp_test_YTdY9PLBRMuWtO",
    key_secret: "jmkuyVEmPn6bSnBsGV4Eus7r",
});
  
const app = express();
app.use(express.json())
  
app.post('/createOrder', (req, res)=>{

	const {amount,currency,receipt, notes} = req.body;	
		
	razorpayInstance.orders.create({amount, currency, receipt, notes},
		(err, order)=>{
		
		if(!err)
			res.json(order)
		else
			res.send(err);
		}
	)
});

app.post('/verifyOrder', (req, res)=>{
	
	const {order_id, payment_id} = req.body;	
	const razorpay_signature = req.headers['x-razorpay-signature'];

	const key_secret = jmkuyVEmPn6bSnBsGV4Eus7r;	

	let hmac = crypto.createHmac('sha256', key_secret);

	hmac.update(order_id + "|" + payment_id);
	
	const generated_signature = hmac.digest('hex');
	
	if(razorpay_signature === generated_signature){
		res.json({success:true, message:"Payment has been verifed"})
	}
	else
	res.json({success:false, message:"Payment verification failed"})
});

app.listen(2222, ()=>{
    console.log("listening on 2222");
});