# KeyVault App API Documentation
Welcome to the official documentation of the KeyVault App API. This API is built using the Node.js runtime environment and Express.js framework.

## Base URL
```
https://keyvault-api.onrender.com/
```

## Endpoints
The following are the endpoints provided by the KeyVault App API:

### Home
* __`GET /`__
This endpoint returns a welcome message.

Request
```
GET /
```

Response
```
Welcome to the KeyVault app!
```

### User Registration
* __`POST /register`__
This endpoint registers a new user to the KeyVault app.

Request
```
{
    "name": "John",
    "email": "john@example.com",
    "password": "password",
    "cpassword": "password"
}
```

Response
* __`200 Created`__
```
{
  "message": "User created successfully."
}
```

* __`400 Bad Request`__
```
{
  "error": "Invalid Credentials."
}
```