# Complete Guide to Node Authentication

Code for the entire scotch.io tutorial series: Complete Guide to Node Authentication

We will be using Passport to authenticate users locally, with Facebook, Twitter, and Google.

## Instructions

If you would like to download the code and try it for yourself:

1. Clone the repo: `git clone git@github.com:scotch-io/node-authentication-guide`
2. Install packages: `npm install`
3. Change out the database configuration in config/database.js
4. Launch: `node server.js`
5. Visit in your browser at: `http://localhost:8080`



## REST API examples

### Getting all products with remaining inventory
curl 'http://localhost:8080/api/v1/products'
```
[{
"url": "/api/v1/products/538b8b562b0cd04a36b46157",
"name": "Orange",
"count": 1,
"_id": "538b8b562b0cd04a36b46157",
"__v": 0
}]
```
### Adding a Tomato
curl -X POST -H "Content-Type: application/json" -d '{"name": "Tomato", "count": 1 }' 'http://localhost:8080/api/v1/products'
```
{
  "product": {
    "__v": 0,
    "url": "/api/v1/products/538b9855d81ae7a336dfc613",
    "name": "Tomato",
    "count": 1,
    "_id": "538b9855d81ae7a336dfc613"
  }
```
### Getting a particular Product

curl 'http://localhost:8080/api/v1/products/538b8b562b0cd04a36b46157'
```
{
  "products": [
    {
      "url": "/api/v1/products/538b8b562b0cd04a36b46157",
      "name": "Orange",
      "count": 1,
      "_id": "538b8b562b0cd04a36b46157",
      "__v": 0
    }
  ]
}
```
- N.B. Adding user association now

