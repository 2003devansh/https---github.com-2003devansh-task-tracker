# TaskFlow – Project & Task Manager

TaskFlow is a full-stack project and task management app that allows users to create projects, add tasks, update their statuses, and track their progress.

---

## Key Features
- 🔐 **JWT Authentication** for secure access.
- 🗂️ **Create up to 4 projects per user**.
- ✅ **Add, update, delete tasks** with statuses: `todo`, `in-progress`, `done`.
- 🕒 **View creation time** and **completion time** for tasks.
- 💾 **MongoDB** as a backend with **Mongoose**.
- 💨 Smooth animations with **Framer Motion** for a rich user experience.
- 🎨 Fully **responsive UI** using **TailwindCSS**.

---

## 🚀 Getting Started

### 🧰 Prerequisites
Before starting, make sure you have:

- [Node.js](https://nodejs.org/en/download/) installed (version 14.x or higher).
- [npm](https://www.npmjs.com/) installed (npm comes with Node.js).
- A **MongoDB Atlas** account for MongoDB URI.
- An editor to open and modify the code (e.g., [VSCode](https://code.visualstudio.com/)).

---

### 🧑‍💻 Clone the Repository

1. Clone the project to your local machine:

   ```bash
   git clone https://github.com/yourusername/task-tracker.git
   cd task-tracker

2. Backend setup 

   ``` bash
   cd backend
   npm install **dependencies in package.json** 

3. Setup enviroment variabless 
     
    create a .env file in the root of the backend folder and add: 
    MONGO_URI=your_mongo_connection_string
    JWT_SECRET=your_jwt_secret_key
    PORT=5000

Replace your_mongo_connection_string with your MongoDB URI (e.g., MongoDB Atlas), and your_jwt_secret_key with a secret key for JWT authentication.

4. Start backend server 
    npx nodemon server.js


5. FrontEnd setup

  ``` bash 
  cd frontend
     
     Install dependencies 
      
      npm install **dependencies in package.json in frontend folder** 

      NOTE:- All the styling are in tailwind css , make sure to config tailwing css , take help of https://v3.tailwindcss.com/docs/guides/vite

6. Start the frontEnd folder 
   npm run dev 



7. Running the APP 
   After completing the setup 
   

    Backend server runs on: http://localhost:5000

    Frontend server runs on: http://localhost:5173

