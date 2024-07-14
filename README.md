### Why node and react

React is highly custmoizable, we can develop componenets independently, it is fast due to its VDOM feature and very light weight.

Node.js is well-suited for making server-side applications. It can handle numerous simultaneous connections efficiently, and also it is ideal for high-traffic applications.

### Why different folder structure

To develop and deploy frontend and backend services independently. Now the backend service can be develop and deployed independently and can be easily integrated using APIs and same applies with frontend.

# URL Shortener Application

A simple URL Shortener Application built with React, Node and Express.js, allowing you to shorten long URLs and redirect using the shortened URLs. This project includes Swagger documentation for easy API testing and integration.

For this project I used randomstring package to generate 7 character long string correspond to long url given by user.

I took reference of github repository by Aryanranderiya - https://github.com/aryanranderiya/URLShortener/blob/master/Backend/api/index.js

## Table of Contents

- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Swagger Documentation](#swagger-documentation)
- [Technologies Used](#technologies-used)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js (v12.x or later)
- npm (v6.x or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/url-shortener.git
   ```
2. Navigate to the project directory:
   ```bash
   cd url-shortener
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Server

Start the Frontend:

Navigate to url-short-fe folder

```bash
npm start
```

Start the Backend:

Navigate to url-short-be folder

```bash
node index.js
```

## API Endpoints

### Shorten URL

1. URL: /short
2. Method: POST
3. Request Body:
   {
   "long_url": "http://www.example.com"
   }
4. Success Response:
   - Code: 200
   - Content:
     {
     "short_url": "http://localhost:3005/abc1234"
     }

### Retrieve Long URL

1. URL: /retrieveLongUrl
2. Method: GET
3. Request Body:
   {
   "short_url": "http://localhost:3005/abc1234"
   }
4. Success Response: - Code: 200 - Content:
   {
   "long_url": "http://www.example.com"
   }
5. Error Response:
   Code: 400
   Content:
   {
   "Error": "URL not found"
   }

### Redirect to Long URL

1. URL: /:short_url
2. Method: GET
3. Success Response:
   Code: 302
   Redirects to the original long URL
4. Error Response:
   Code: 404
   Content:
   {
   "Error": "URL not found"
   }

## Swagger Documentation

Swagger documentation is available at http://localhost:3005/api-docs. You can use it to test the API endpoints and understand the request/response structures.

### Technologies Used

1. Backend: Node.js, Express.js
2. Documentation: Swagger (swagger-ui-express, swagger-jsdoc)
3. Utilities: Randomstring, CORS

### License

This project is licensed under the MIT License - see the LICENSE file for details.
