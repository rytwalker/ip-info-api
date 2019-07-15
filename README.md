# IP Info API
This is a simple serverless API that takes an IP address as a parameter and returns geolocation information about it.

## Tech:
- Node
- Express
- Serverless
- AWS Lambda
- AWS API GATEWAY
- IPSTACK.com

## Routes
| Method | Endpoint      | Description                                                                                                                                                                                                                                                                                 |
| ------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /:ip   | Takes an IP address as a parameter and returns geolocation data about address via ipstack. If not valid, returns an error 400.            |
