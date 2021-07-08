# Stage 1: Build the app in a node builder
FROM node:14.16.1-alpine AS builder
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build --prod --build-optimizer

# Stage 2: Serve app with nginx server
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/local/app/dist/mbot /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
