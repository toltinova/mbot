# MBot

This project aims to create a UI for MBot, a cryptocurrency bot, capable of trading many cryptocurrencies at runtime.

MBot depends on the GitHub open source project Zenbot, mainly maintained by the developer DeviaVir, which makes automated cryptocurrency trading possible. 

Where the Zenbot is only capable of trading one cryptocurrency trading pair, the MBot, which consists of many Zenbots, renders multiple trading pairs possible. 	

## Mock Backend Setup

Run `docker run -itp 3000:8080 aboger/mbot-backend` to start a mock backend on `http://localhost:3000/`.

This should be done before running the frontend, otherwise there is no test data available.

## Frontend Development Server

1. Run `npm install -g @angular/cli` to install the Angular command line interface.
2. Run `npm install` to install required project dependencies.
3. Run `ng serve` for a frontend development server on `http://localhost:4200/`.

The app will automatically reload if you change any of the source files.

## Frontend Angular Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Frontend Docker Image Build

1. Run `chmod +x build.sh` to make the build script executable.
2. Run `./build.sh` to build a frontend Docker image.
3. Run `docker run -itp 80:80 otoltinova/mbot-frontend` to start the newly built image on `http://localhost:80/`.

## Docker Compose Stack

Run `docker compose up` to start the frontend on `http://localhost:80/` and the backend on `http://localhost:3000/`.

