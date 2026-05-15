# Flutter Web Deployment with Docker and CI/CD

## Project Overview

This project demonstrates how to build, containerize, and deploy a Flutter Web application using Docker and Nginx. It includes Docker Compose for simplified local deployment and GitHub Actions for Continuous Integration (CI) and Continuous Deployment (CD) to GitHub Pages.

The project focuses on applying DevOps practices to automate the build and deployment of a Flutter Web application.

---

## Technologies Used

- Flutter Web
- Dart
- Docker
- Nginx
- Docker Compose
- GitHub Actions
- GitHub Pages
- Git and GitHub

---

## Project Structure

```text
Flutter-Web-Deployment-with-Docker-and-CI-CD/
├── index.html
├── main.dart.js
├── flutter.js
├── flutter_bootstrap.js
├── flutter_service_worker.js
├── assets/
├── icons/
├── canvaskit/
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── README.md
└── .github/
    └── workflows/
        ├── main.yml
        └── deploy.yml
```

---

## Build the Flutter Web Application

```bash
flutter build web --base-href "/Flutter-Web-Deployment-with-Docker-and-CI-CD/"
```

---

## Run the Application with Docker Compose

```bash
docker compose up --build -d
```

---

## Access the Application Locally

```text
http://localhost:8080
```

---

## Stop the Application

```bash
docker compose down
```

---

## Dockerfile

The application is served using the official Nginx Docker image.

```dockerfile
FROM nginx:latest
COPY . /usr/share/nginx/html
```

---

## CI Pipeline

Whenever code is pushed to the `main` branch, GitHub Actions automatically:

1. Checks out the repository
2. Builds the Docker image
3. Validates that the application can be containerized successfully

---

## CD Pipeline

After a successful push, GitHub Actions automatically deploys the application to GitHub Pages.

This makes the application publicly accessible through a live URL.

---

## Live Demo

```text
https://michaeljoshua1504.github.io/Flutter-Web-Deployment-with-Docker-and-CI-CD/
```

---

## Skills Demonstrated

- Flutter Web Deployment
- Docker Containerization
- Nginx Web Server Configuration
- Docker Compose
- GitHub Actions
- Continuous Integration (CI)
- Continuous Deployment (CD)
- GitHub Pages
- YAML Workflow Configuration
- Technical Documentation

---

## Learning Outcomes

Through this project, I gained practical experience in:

- Building a Flutter Web application for production deployment
- Containerizing web applications using Docker and Nginx
- Managing deployments with Docker Compose
- Automating build and deployment workflows using GitHub Actions
- Deploying applications to GitHub Pages
- Applying DevOps practices to frontend applications

---

## GitHub Repository Description

A beginner DevOps project demonstrating Docker, Nginx, Docker Compose, and CI/CD by deploying a Flutter Web application using GitHub Actions and GitHub Pages.

---

## Resume Project Entry

### Flutter Web Deployment with Docker and CI/CD

- Built and deployed a Flutter Web application using Docker and Nginx.
- Implemented GitHub Actions workflows to automate Docker image builds and deployment to GitHub Pages.
- Configured Docker Compose for simplified deployment and container management.
- Applied Docker best practices and maintained structured project documentation.
- Published the project with a live public URL to demonstrate end-to-end CI/CD automation.

---

## Author

Padamuthum Michael Joshua
