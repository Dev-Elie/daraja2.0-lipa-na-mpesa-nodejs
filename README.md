# daraja2.0-lipa-na-mpesa-nodejs

## Installation & set up

### Clone repo
```bash
git clone https://github.com/Dev-Elie/daraja2.0-lipa-na-mpesa-nodejs.git Lipa-na-Mpesa
```

### Install packages & start app

```bash
cd Lipa-na-Mpesa
npm install
npm start
```
### Simulate Payment

Endpoint - `http://localhost:3000/api/stkPush`

Method   - `POST`

Request body(JSON)
```JSON
{
	"amount": 1,
	"phone": "2547***",
	"Order_ID": "2255"
}
```

Expected response body

```JSON
{
	"MerchantRequestID": "*****",
	"CheckoutRequestID": "ws_CO_******",
	"ResponseCode": "0",
	"ResponseDescription": "Success. Request accepted for processing",
	"CustomerMessage": "Success. Request accepted for processing"
}
```

### Payment confirmation

Endpoint - `http://localhost:3000/api/confirmPayment/${CheckoutRequestID}`

Method   - `POST`

Expected response body

```JSON

{
	"ResponseCode": "0",
	"ResponseDescription": "The service request has been accepted successsfully",
	"MerchantRequestID": "******",
	"CheckoutRequestID": "ws_CO_*****",
	"ResultCode": "0",
	"ResultDesc": "The service request is processed successfully."
}
```

[Read more](https://wamaithanyamu.com/how-to-integrate-the-mpesa-stk-push-api-in-nodejs).
