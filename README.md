# Full Stack To-Do List Application with Angular, Spring Boot, Docker, and MySQL

This repository contains a full-stack web application built with Angular and Spring Boot, deployed using Docker, and using MySQL as the database.

Live Demo at: https://aymen-nacer.github.io/Full-Stack-To-Do-List-App/


![Capture](https://github.com/Aymen-Nacer/Full-Stack-To-Do-List-App/assets/67188835/7831ce49-a229-4617-8afd-683f2ef47a8b)


## Table of Contents

- [Features](#features)
- [Concepts Covered](#concepts-covered)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)



## Features

- Angular for the frontend
- Spring Boot for the backend
- Docker for containerization
- MySQL for the database

## Concepts Covered

### Angular Concepts

- Dependency Injection
- Observables
- HTTP Client
- OnInit Lifecycle Hook
- Component Databinding
- Parent and Child Components
- Component Interaction (Input Binding)
- Event binding
- Property binding
- Template Reference Variable
- NgFor Directive
- ngClass Directive
- Subscribers
- TypeScript
- RxJS
- CLI Commands


### Spring Boot Concepts

- Spring Security
- Spring Data JPA
- Java Persistence API
- Spring Hibernate
- Spring Web
- Dependency Injection
- Annotations
- Services
- HTTP Methods (GET, POST, PUT, DELETE)
- PathVariable
- Exception Handling
- CorsConfiguration
- Security Configuration


## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed (for Angular)
- Java and Maven installed (for Spring Boot)
- Docker installed (for containerization)
- MySQL installed and running

## Getting Started

To get a local copy up and running follow these simple example steps.

### Clone the Repository

```
git clone https://github.com/your-username/full-stack-app.git
cd full-stack-app
```

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







