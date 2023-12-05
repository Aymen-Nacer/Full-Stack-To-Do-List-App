package com.aymen.todolist.controller;

import com.aymen.todolist.model.Task;
import com.aymen.todolist.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
public class TaskController {

    // Autowired service to interact with tasks
    @Autowired
    private TaskService taskService;

    // Endpoint to get all tasks
    @GetMapping
    public ResponseEntity<List<Task>> getAllTasks() {
        // Retrieve all tasks from the service
        List<Task> tasks = taskService.getAllTasks();
        // Return tasks with HTTP status OK
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

    // Endpoint to create a new task
    @PostMapping
    public ResponseEntity<Task> createTask(@RequestBody String taskDescription) {
        // Create a new task with the provided description
        Task createdTask = taskService.createTask(taskDescription);
        // Return the created task with HTTP status CREATED
        return new ResponseEntity<>(createdTask, HttpStatus.CREATED);
    }

    // Endpoint to update a task by id
    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id) {
        // Update the task with the provided id
        Task updatedTask = taskService.updateTask(id);
        // Return the updated task with HTTP status OK
        return new ResponseEntity<>(updatedTask, HttpStatus.OK);
    }

    // Endpoint to delete a task by id
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        // Delete the task with the provided id
        taskService.deleteTask(id);
        // Return NO_CONTENT status when the task is successfully deleted
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
