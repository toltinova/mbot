FROM node:14.16.1-alpine As builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:alpine

COPY --from=builder /usr/src/app/dist/mbot/ /usr/share/nginx/html
