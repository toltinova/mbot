# MBot

TODO: Add short description

## Mock Backend Setup

Run `docker run -itp 3000:8080 aboger/mbot-backend` to start a mock backend on `http://localhost:3000/`.

This should be done before running the frontend, otherwise there is no test data available.

## Frontend Development Server

Run `ng serve` for a frontend development server on `http://localhost:4200/`.

The app will automatically reload if you change any of the source files.

## Frontend Angular Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Frontend Docker Image Build

Run `./build.sh` to build a frontend Docker image.
Run `docker run -itp 80:80 otoltinova/mbot-frontend` to start the newly built image on `http://localhost:80/`.

## Docker Compose Stack

Run `docker compose up` to start the frontend on `http://localhost:80/` and the backend on `http://localhost:3000/`.

