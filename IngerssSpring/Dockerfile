# # 빌드 단계
# FROM amazoncorretto:21 AS builder

# WORKDIR /app

# # COPY만 docker-compose 파일의 위치를 기반으로 작동함
# COPY . .

# # 개행문자 오류 해결 [unix와 window 시스템 차이]
# RUN sed -i 's/\r$//' gradlew

# # RUN은 현재 파일을 위치를 기반으로 작동함
# RUN chmod +x ./gradlew
# #RUN ./gradlew clean build -x test
# RUN ./gradlew bootJar

# FROM amazoncorretto:21
# ENV JAR_PATH=/app/build/libs
# COPY --from=builder ${JAR_PATH}/*.jar /app/app.jar


# # 포트 열기
# EXPOSE 8080

# # 실행 명령어
# ENTRYPOINT ["java", "-jar", "/app/app.jar"]

######################################################
# 1단계: Build with Gradle (Alpine)
FROM gradle:8.5-jdk21-alpine AS builder
WORKDIR /app
COPY . .
RUN chmod +x ./gradlew && ./gradlew bootJar

# 2단계: 실행 환경 (JRE만 포함된 Alpine)
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app
COPY --from=builder /app/build/libs/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/app.jar"]