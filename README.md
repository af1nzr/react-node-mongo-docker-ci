# 3-tier-app-react-express-ci-cd

A 3-tier application with a React frontend, Express backend, and CI/CD integration using GitHub Actions.

## Features
- React frontend
- Express.js backend
- Dockerized for easy deployment
- CI/CD with GitHub Actions

## Project Structure
```
3-tier-app/
├── backend/        # Express backend
├── frontend/       # React frontend
├── .github/        # GitHub Actions workflows
├── docker-compose.yml
├── README.md
```

## Getting Started

### Prerequisites
- Node.js
- Docker & Docker Compose

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/3-tier-app-react-express-ci-cd.git
   cd 3-tier-app-react-express-ci-cd/3-tier-app
   ```
2. Install dependencies for backend and frontend:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```

### Running Locally
- Using Docker Compose:
  ```bash
  docker-compose up --build
  ```
- Or run backend and frontend separately:
  ```bash
  # Backend
  cd backend && npm start
  # Frontend
  cd frontend && npm start
  ```

## Usage
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## CI/CD
- Automated builds and tests are run via GitHub Actions on push and pull requests.
- See `.github/workflows/` for workflow configuration.

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
