FROM node:20-slim

WORKDIR /src

COPY ./ ./

RUN npm -y install 

EXPOSE 3000

# 개발 모드로 실행
CMD ["npm", "run", "start"]
