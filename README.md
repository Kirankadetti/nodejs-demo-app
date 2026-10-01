# Node.js CI/CD Pipeline with GitHub Actions and Docker

## Overview

This project demonstrates a CI/CD pipeline for a Node.js application using GitHub Actions and Docker.

Every push to the main branch automatically:

1. Checks out the source code
2. Sets up Node.js 22
3. Runs automated tests
4. Logs in to Docker Hub securely
5. Builds the Docker image
6. Pushes the Docker image to Docker Hub

## Technology Stack

- Node.js
- Git and GitHub
- GitHub Actions
- Docker
- Docker Hub

## CI/CD Workflow

Developer Push
|
v
GitHub Repository
|
v
GitHub Actions
|
+-- Setup Node.js
|
+-- Run Tests
|
+-- Docker Build
|
+-- Docker Hub Login
|
v
Docker Push
|
v
Docker Hub

## GitHub Actions Pipeline

The workflow is located at:

.github/workflows/main.yml

The pipeline runs whenever code is pushed to the main branch.

### Pipeline Stages

1. Checkout source code

GitHub Actions downloads the latest source code from the repository.

2. Setup Node.js

The workflow configures Node.js 22.

3. Run tests

The workflow runs:

npm test

The pipeline proceeds only when the tests pass.

4. Build Docker image

The application is packaged using the Dockerfile.

5. Docker Hub authentication

Docker Hub credentials are stored securely as GitHub Actions Secrets:

- DOCKERHUB_USERNAME
- DOCKERHUB_TOKEN

6. Push Docker image

The image is pushed to:

kirankadetti/nodejs-demo-app:latest

## Docker Commands

Build the image:

docker build -t nodejs-demo-app:latest .

Run the application:

docker run -p 3000:3000 nodejs-demo-app:latest

Application URL:

http://localhost:3000

## Testing

Run tests locally:

npm test

## Docker Hub

Docker image:

kirankadetti/nodejs-demo-app:latest

## GitHub Repository

https://github.com/Kirankadetti/nodejs-demo-app

## DevOps Concepts Demonstrated

- Continuous Integration
- Automated Testing
- CI/CD Pipeline Automation
- GitHub Actions
- Docker Containerization
- Docker Image Build
- Docker Hub Deployment
- GitHub Actions Secrets
- Git-based Automation

## Conclusion

This project demonstrates an automated CI/CD workflow where code pushed to GitHub is tested, containerized using Docker, and published to Docker Hub using GitHub Actions.
