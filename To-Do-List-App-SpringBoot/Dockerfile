FROM openjdk:11-jre-slim

WORKDIR /app

COPY target/todolist-0.0.1-SNAPSHOT /app/your-application.jar

EXPOSE 8080


CMD ["java", "-jar", "your-application.jar"]