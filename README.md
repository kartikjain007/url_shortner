# URL Shortener APPLICATION

A simple URL Shortener Application built with React, Node and Express.js, allowing you to shorten long URLs and redirect using the shortened URLs. This project includes Swagger documentation for easy API testing and integration.

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
