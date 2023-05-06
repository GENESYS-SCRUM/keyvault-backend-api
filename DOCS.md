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

### Login
* __`POST /login`__
This endpoint logs in an existing user to the KeyVault app.

Request
```
{
    "email": "johndoe@example.com",
    "password": "password"
}
```

Response
* __`200 OK`__
```
{
    "message": "User login successfully."
}
```

* __`400 Bad Request`__
```
{
  "error": "Please fill the data."
}
```

### User Authentication
* __`GET /authenticate`__
This endpoint authenticates a user using their JWT token.

Request
```
GET /authenticate
```

Response
* __`200 OK`__
```
{
  "name": "David Oduse",
  "email": "davidoduse@keyvault.com",
  "password": "encrypted-password",
  "cpassword": "encrypted_password",
  "createdAt": "2023-05-06T12:30:00.000Z",
  "updatedAt": "2023-05-06T12:30:00.000Z",
  "__v": 0
}
```

* __`401 Unauthorized`__
```
{
  "error": "Unauthorized"
}
```

### Add New Password
* __`POST /addnewpassword`__
This endpoint adds a new password to the KeyVault app for the authenticated user.

Request
```
{
    "platform": "example.com",
    "userPass": "password",
    "userEmail": "johndoe@example.com",
    "platEmail": "admin@example.com"
}
```

Response
* __`200 OK`__
```
{
    "message": "Successfully added your password."
}
```

### Delete Password
* __`POST /deletepassword`__
This endpoint deletes a password from the saved passwords.

Request
```
{
    "id": "610a4236db870
}
```

Responses
* __`200 OK`__
```
{
    "message": "Successfully deleted your password."
}
```

* __`400 Bad Request`__
```
{
    "error": "Could not find data"
}
```

```
{
    "error": "Could not delete the password."
}
```

* __`401 Unathorised`__
```
{
    "error": "Unauthorized access. Please provide a valid token."
}
```

### User Logout
* __`GET /logout`__
This endpoint clears the cookie _"jwtoken"_ and logs out the user.

Request
```
GET /logout
```

Response
```
200 OK
Logout
```

## Thank You!
Thank you for using our keyvault api for your projects. This backend is proudly developed by the Backend Devs of the Scrum Team 4 group, during the Scrum Week of Learnable '22 internship program.

If you have any issue while using the api, you can raise a issue on the repository. The developers will fix it immediately.

Thank you, once again.