# vzy_test
Little Nodejs Demo



live url - https://acehelp-bfne.onrender.com/
## Authentication Controller

### Register User

* Endpoint: POST /auth/register

    * Description  - Registers a new user.

    * Request

        * Method: POST

        * URL: /auth/register

        * Body:

        ```json
          {
          "firstname": "John",
          "surname": "Doe",
          "phone": "1234567890",
          "email": "john.doe@example.com",
          "password": "securePW1",
          "address": "123 Main St, City",
          "gender": "Male",
          "date_of_birth": "1990-01-01"
           }

    * Response
        * Status: 201 Created
        * Body:

  ```json
    {
        "msg": "OK",
        "data": {
            "message": "User created successfully."
            },
        "statusCode": 201
    }

### Login User

* Endpoint: POST /auth/login
    * Description - Logs in an existing user and returns an authentication token.
        * Request

            * Method: POST

            * URL: /auth/login

            * Body:

            ```json
              {
                  "email": "john.doe@example.com",
                  "password": "securePW1"
              }

    * Response
        * Status: 200 OK
        * Body:
        * statusCode: 200

          ```json
            {
                "msg": "OK",
                "data": {
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
              },
  }

## User Controller
### Get Current User
* Endpoint: GET /user/me
* Description: Retrieves information about the currently authenticated user.
* Request:
    * Method: GET
    * URL: /user/me
        * Response:
            * Status: 200 OK
            * Body:
          ```json
          {
              "msg": "OK",
              "data": {
                  "user": {
                  // User data
                  }
              },
              "statusCode": 200
          }

## Webhook Implementation
### verify payment

* Endpoint: POST /payments
* Description - stripe webhook.
  * Request
      * Method: POST
      * URL: /service/create
      * Body: (stripe event payload)
    ```json
    {
    "id": "evt_1ABCDEFGHIJK",
    "object": "event",
    "api_version": "2020-08-27",
    "created": 1644072572,
    "type": "payment_intent.succeeded",
    "data": {
      "object": {
        "id": "pi_1JKLMNOPQRST",
        "object": "payment_intent",
        "amount": 2100,
        "amount_received": 2000,
        "currency": "usd",
        "created": 1644072571,
        "metadata": {
          "userUID": "c11f05a9-7d79-47a2-a8d3-2e4e64e002fb"
        },
        "status": "succeeded"
      }
    }


* Response
    * Status: 201 Created
    * Body:
  ```json
              {
                "msg": "Created",
                "data": {
                  "service": {
                    "service_name": "Cleaning Service",
                    "service_description": "Professional cleaning for homes and offices",
                    "service_logo": "cleaning_logo.png",
                    "service_color": "#3498db"
                  }
                },
                "statusCode": 201
              }
```
