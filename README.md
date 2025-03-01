# BookNest

BookNest is a full-stack application to manage your books easily and intuitively. It allows users to add, edit, delete, and view information about their books, offering a modern and responsive user experience.

## Features

- **Book Management:** Perform CRUD operations (Create, Read, Update, Delete) on your books.
- **Modern User Interface:** Responsive design friendly for mobile and desktop devices.
- **RESTful API:** Efficient communication between frontend and backend.
- **Authentication:** authentication with JWT for registered users.
- **Optimization and Performance:** Scalable architecture allowing future improvements and additional functionalities.

## Technologies

- **Frontend:**
  - [React](https://reactjs.org/)
  - Tailwind CSS
- **Backend:**
  - [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/)
  - MongoDB
- **Authentication:**
  - JWT (JSON Web Tokens) for route and user security

## Installation

Follow these steps to set up the project in your local environment:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/NickGV/BookNest.git
   cd BookNest
   ```

2. **Instala las dependencias del Backend:**

    ```bash
    cd backend
    npm install
    ```
3. **Instala las dependencias del Frontend**:
    ```bash
      cd ../frontend
      npm install
    ```
4. **Configuración**

**Backend**
  In your backend file, create the .env file and define the next variables

    ```bash
      PORT=5000
      MONGO_URI=tu_conexion_a_mongodb
      JWT_SECRET=tu_clave_secreta
    ```

**Frontend**

If you need to configure environment variables (for example, the API URL), create a .env file in the frontend folder and define the corresponding variables:

REACT_APP_API_URL=http://localhost:5000/api

## Usage
Starting the Backend

From the backend folder, run:
  ```bash
  npm start
  ```

starting the frontend
from the frontend folder, run:
  ```bash
  npm run dev
  ```

The application will automatically open in your browser at http://localhost:3000.

Developer: [NickGV](https://github.com/NickGV)
Email: nickgomvelez@gmail.com