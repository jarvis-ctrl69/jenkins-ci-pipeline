# Automated CI Pipeline using Jenkins

## Project Overview

This project demonstrates Continuous Integration (CI)
using Jenkins, Node.js, GitHub and Jest.

Every code change can trigger an automated pipeline
that builds the application and executes automated tests.

## Technologies Used

- Node.js 22
- Jenkins
- Git and GitHub
- Jest
- Docker

## Project Structure

    prg12/
    ├── src/
    │   └── app.js
    ├── tests/
    │   └── app.test.js
    ├── Jenkinsfile
    ├── Dockerfile
    ├── package.json
    └── README.md

## Build Application

    npm run build

## Run Automated Tests

    npm test

## CI Pipeline Stages

1. Build
2. Test

## Expected Results

- Successful build and tests produce a green pipeline.
- Failed tests produce a failed pipeline.
- Correcting the issue allows the next run to succeed.

## Author

Harshavardhana S K
Webhook test: automatic Jenkins build verification.
