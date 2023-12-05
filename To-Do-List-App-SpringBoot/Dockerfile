# Use the official OpenJDK 11 JRE slim image as the base image
FROM openjdk:11-jre-slim

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the JAR file from the target directory to the /app directory in the container
COPY target/todolist-0.0.1-SNAPSHOT /app/your-application.jar

# Expose port 8080 for the Spring Boot application to listen on
EXPOSE 8080

# Command to run the application when the container starts
CMD ["java", "-jar", "your-application.jar"]
