# FieldTrack Pro

FieldTrack Pro is a comprehensive solution designed to optimize field operations and enhance productivity for businesses relying on field sales and installation teams.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Mobile App Setup (React Native)](#mobile-app-setup-react-native)
- [Usage](#usage)
- [Authors](#authors)
- [Contributing](#contributing)
- [License](#license)

## Introduction

FieldTrack Pro provides tools for monitoring and managing field team activities, ensuring efficient sales and installation processes through real-time tracking, task management, and route planning.

## Technologies Used

- **Backend Framework:** Django 3.x
- **Database:** PostgreSQL 13.x
- **Frontend:** React (web interface) and React Native (mobile application)

## Installation

### Prerequisites

Before starting, make sure you have the following installed on your machine:

- Python 3.x
- Node.js (for frontend development)
- PostgreSQL (with a database created for this project)

### Backend Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your/repository.git
    cd repository
    ```

2. **Set up a virtual environment (optional but recommended):**

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install Python dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

4. **Configure PostgreSQL:**

    - Ensure PostgreSQL is installed and running.
    - Create a database for FieldTrack Pro (e.g., `fieldtrackdb`).

5. **Update database settings:**

    - Open `backend/fieldtrackpro/settings.py`.
    - Update the `DATABASES` setting with your PostgreSQL database details:

      ```python
      DATABASES = {
          'default': {
              'ENGINE': 'django.db.backends.postgresql',
              'NAME': 'fieldtrackdb',
              'USER': 'your_db_user',
              'PASSWORD': 'your_db_password',
              'HOST': 'localhost',
              'PORT': '5432',
          }
      }
      ```

6. **Run migrations to create database schema:**

    ```bash
    python manage.py migrate
    ```

7. **Start the Django development server:**

    ```bash
    python manage.py runserver
    ```

    Access the Django admin interface at [http://localhost:8000/admin/](http://localhost:8000/admin/).

### Frontend Setup

1. **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

2. **Install frontend dependencies:**

    ```bash
    npm install
    ```

3. **Start the frontend development server:**

    ```bash
    npm start
    ```

    This will start the React development server for the web interface.

### Mobile App Setup (React Native)

1. **Navigate to the mobile directory:**

    ```bash
    cd mobile
    ```

2. **Install mobile app dependencies:**

    ```bash
    npm install
    ```

3. **Start the React Native development server:**

    ```bash
    npm start
    ```

    Follow additional instructions from the React Native CLI to run the mobile app on an emulator or a physical device.

## Usage

- **Backend:** Access the Django admin interface to manage data and configurations.
- **Frontend:** Access the web interface to interact with FieldTrack Pro features.
- **Mobile App:** Use the mobile app for on-the-go tracking and task management.

## Authors

- **Kyanzi Hassan Musisi** - Project Manager / Full Stack Developer
- **Usman Abdul Hamid** - Full Stack Developer
- **Henok Estifanos** - Mobile App Developer

## Contributing

Contributions are welcome! Please submit issues or pull requests to help improve FieldTrack Pro.

## License

This project is licensed under the [MIT License](LICENSE).
