**Node.js Web API Project**
This project is a Node.js-based Web API with an InMemory database. It consists of two controllers:

**TodoController:** This controller provides CRUD (Create, Read, Update, Delete) APIs for managing todo items.
**AuthController:** This controller handles registration and login functionalities.

# Node JS Assignment Project

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Megha013/Node-JS-JWT-Authentication.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd <project_directory>
    ```

3. **Install dependencies**:

    ```bash
    node index.js
    ```

4. **Set up environment variables**:

    Create a `.env` file in the root directory and define the following variables:

    ```plaintext
    PORT=3000
    JWT_SECRET=<your_secret_key>
    ```

5. **Start the server**:

    ```bash
    npm start
    ```

## Usage

Once the server is running, you can use the following endpoints:

### TodoController Endpoints:

- GET /todo/getall: Get all todo items.
- GET /todo/get/:id: Get a todo item by ID.
- POST /todo/create: Create a new todo item.
- PUT /todo/update/:id: Update a todo item.
- DELETE /todo/delete/:id: Delete a todo item.

### AuthController Endpoints:

- POST /auth/login
