# Introduction
This is the Seed web app. Seed is an alternative currency aimed help the financially disadvantaged to continue to exchange goods and services even if they are low on dollars. 
It was conceived and built out during the Intel Code for Good hackathon in Berkeley on May 31st through June 1st 2014 by a team of friendly strangers. 

# Technical documentation
## REST API (under dev) examples

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

# Acknowledgements
## Intel Code For Good Berkeley Hackathon (5-31 to 6-01, 2014)
At the time of this writing, 99% of the code here was written by an impromptu cluster of coders who met at the Intel Code For Good hackathon in Berkeley. 
## Scotch.io tutorial on authentication
The "Complete Guide to Node Authentication" tutorial repo was forked and built on in the beginning of this project. It is used almost verbatim for our authentication. 
Big shoutout to them. Check them out at github.com/scotch-io/node-authentication-guide
