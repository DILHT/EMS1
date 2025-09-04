# 🏢 Employee Management API

A simple RESTful API for managing employees, built with Node.js, Express, and MongoDB.

## ✨ Features

✅ Create, Read, Update, and Delete employees (CRUD)

⚡ Built with Express.js and Mongoose

🌐 RESTful API endpoints

🔓 CORS enabled for frontend integration

🔧 Configurable using dotenv environment variables

## 🛠 Prerequisites

Node.js >= 14

npm or yarn

### MongoDB instance (local or cloud, e.g., MongoDB Atlas)

🚀 Installation

### Clone the repository:

git clone <your-repo-url>
cd employee-management-api


## Install dependencies:

npm install


## Create a .env file in the root directory and add:

PORT=3000
MONGODB_URL=<your_mongodb_connection_string>

## 🏃 Running the API

## Start the server in development mode (with nodemon):

npm run dev


## Or start normally:

node server.js


## The API will run at:

http://localhost:3000

## 📦 API Endpoints

## Base URL: http://localhost:3000/api/employees

Method	Endpoint	Description
GET	/	Get all employees
GET	/:id	Get employee by ID
POST	/	Create a new employee
PUT	/:id	Update an existing employee
DELETE	/:id	Delete an employee
## 📝 Request Body for POST / PUT
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "position": "Developer",
  "department": "IT",
  "salary": 50000
}

## ⚠️ Error Handling

Returns 404 if employee not found

Returns 400 for invalid request data

Returns 500 for server errors

## 🛠 Tech Stack

Node.js

Express.js

MongoDB & Mongoose

dotenv

CORS

## 🌟 Future Improvements

Add authentication & authorization

Add pagination for employee list

Add input validation with Joi or express-validator

Implement unit testing with Jest

## 👤 Author

## Daniel Kasambala

📧 Email: danielkasambala51@gmail.com
💻 GitHub: www.github.com/DILHT

## 📝 License

This project is licensed under the MIT License.