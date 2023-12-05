# Full Stack Application with Angular, Spring Boot, Docker, and MySQL

This repository contains a full-stack web application built with Angular and Spring Boot, deployed using Docker, and using MySQL as the database.

Live Demo at: https://aymen-nacer.github.io/To-Do-List-App-with-User-Authentication/

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Concepts Covered](#concepts-covered)


## Features

- Angular for the frontend
- Spring Boot for the backend
- Docker for containerization
- MySQL for the database

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed (for Angular)
- Java and Maven installed (for Spring Boot)
- Docker installed (for containerization)
- MySQL installed and running

## Getting Started

To get a local copy up and running follow these simple example steps.

### Clone the Repository

```bash
git clone https://github.com/your-username/full-stack-app.git
cd full-stack-app

### Frontend Setup
```
cd To-Do-List-App-Angular
npm install
ng serve
visit http://localhost:4200 in your browser to see the Angular app.
```

### Backend Setup
```
cd backend
./mvnw spring-boot:run
```

### MySQL Database Creation

```

CREATE TABLE tasks (
    task_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    task_description VARCHAR(255) NOT NULL,
    complete BOOLEAN DEFAULT false NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

```


## Concepts Covered

### Angular Concepts

1. **Dependency Injection**
2. **Observables**
3. **HTTP Client**
4. **CLI Commands**
5. **OnInit Lifecycle Hook**
6. **Component Databinding**
7. **Parent and Child Components**
8. **Component Interaction (Input Binding)**
9. **Event binding**
10. **Property binding**
11. **Template Reference Variable**
12. **NgFor Directive**
13. **ngClass Directive**
14. **Subscribers**
15. **TypeScript**
16. **RxJS**

### Spring Boot Concepts

1. **Dependency Injection**
2. **Annotations**
3. **Services**
4. **Spring Web**
5. **HTTP Methods (GET, POST, PUT, DELETE)**
6. **PathVariable**
7. **Exception Handling**
8. **CorsConfiguration**
9. **Security Configuration**
10. **Spring Security**
11. **Spring Data JPA**
12. **Java Persistence API**
13. **Spring Hibernate**







