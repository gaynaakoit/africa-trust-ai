# ---------- DEV ----------
FROM node:14-alpine AS dev
WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--port", "4200"]

# ---------- BUILD ----------
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build -- --configuration production

# ---------- NGINX ----------
FROM nginx:alpine

COPY --from=build /app/dist/africa-trust-frontend /usr/share/nginx/html

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]