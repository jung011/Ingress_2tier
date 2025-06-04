# FROM node:20-slim

# WORKDIR /src

# COPY ./ ./

# RUN npm -y install 

# ENV PUBLIC_URL=/v2

# EXPOSE 3000

# 개발 모드로 실행
# CMD ["npm", "run", "start"]

#########################################################
FROM node:20-slim AS build

WORKDIR /src
COPY . .
RUN npm install
ENV PUBLIC_URL=/v2
RUN npm run build

# 2단계: 정적 파일만 포함한 실제 실행 이미지
FROM nginx:alpine

COPY --from=build /src/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
