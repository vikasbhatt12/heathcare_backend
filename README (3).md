
# Healthcare Backend API
This is a Node.js + Express backend project with PostgreSQL and Sequelize ORM designed for a Healthcare Management System. It includes user authentication and APIs to manage patients, doctors, and their mappings.



## 🔧 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- JSON Web Token (JWT) for authentication


## 📁 Folder Structure
```bash
├── app.js
├── config
│ └── config.js
├── controllers
│ ├── authController.js
│ ├── doctorController.js
│ ├── mappingController.js
│ └── patientController.js
├── middlewares
│ └── authMiddleware.js
├── models
│ ├── index.js
│ ├── user.js
│ ├── patient.js
│ ├── doctor.js
│ └── mapping.js
├── routes
│ ├── authRoutes.js
│ ├── doctorRoutes.js
│ ├── mappingRoutes.js
│ └── patientRoutes.js
├── .env
└── README.md

```
## ## 🚀 API Endpoints
### 🔸 Auth APIs

| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| POST   | `/api/auth/register` | Register a user   |
| POST   | `/api/auth/login`    | Login & get token |

### 🔸 Patient APIs (Protected)

| Method | Endpoint           | Description               |
|--------|--------------------|---------------------------|
| GET    | `/api/patients`    | List all patients         |
| POST   | `/api/patients`    | Add new patient           |
| GET    | `/api/patients/:id`| Get patient by ID         |
| PUT    | `/api/patients/:id`| Update patient info       |
| DELETE | `/api/patients/:id`| Delete patient            |

### 🔸 Doctor APIs (Protected)

| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| GET    | `/api/doctors`    | List all doctors         |
| POST   | `/api/doctors`    | Add new doctor           |
| GET    | `/api/doctors/:id`| Get doctor by ID         |
| PUT    | `/api/doctors/:id`| Update doctor info       |
| DELETE | `/api/doctors/:id`| Delete doctor            |

### 🔸 Mappings APIs (Protected)
| Method | Endpoint                | Description                               |
|--------|-------------------------|-------------------------------------------|
| GET    | `/api/mappings`         | Get all patient-doctor mappings           |
| POST   | `/api/mappings`         | Assign doctor to patient                  |
| GET    | `/api/mappings/:patientId` | Get all doctors assigned to a patient |
| DELETE | `/api/mappings/:id`     | Remove a doctor from a patient            |


## ⚙️ Environment Variables
Create a `.env` file with the following:
```bash
PORT=5000
DB_HOST=localhost
DB_NAME=healthcare_db
DB_USER=your_pg_user
DB_PASS=your_pg_password
JWT_SECRET=your_secret_key
```
## ## 📌 Features Implemented
- User registration & login with JWT

- CRUD APIs for Patients and Doctors

- Patient-doctor mapping

- Authenticated route protection