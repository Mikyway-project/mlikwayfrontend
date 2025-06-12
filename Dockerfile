# Node.js 기반 빌드 이미지
FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# ⬇️ .env 복사
COPY .env .env

COPY . .
RUN npm run build

# Nginx 최종 이미지
FROM nginx:alpine

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/mime.types /etc/nginx/mime.types

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8000
CMD ["nginx", "-g", "daemon off;"]
