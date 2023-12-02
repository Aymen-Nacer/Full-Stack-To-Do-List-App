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

    @Autowired
    private TaskService taskService;

    // Endpoint to get all todos
    @GetMapping
    public ResponseEntity<List<Task>> getAllTodos() {
        List<Task> todos = taskService.getAllTasks();
        return new ResponseEntity<>(todos, HttpStatus.OK);
    }

    // Endpoint to create a new todo
    @PostMapping
    public ResponseEntity<Task> createTodo(@RequestBody Task task) {
        Task createdTodo = taskService.createTask(task);
        return new ResponseEntity<>(createdTodo, HttpStatus.CREATED);
    }

    // Endpoint to update a task by id
    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTodo(@PathVariable Long id) {
        Task updated = taskService.updateTask(id);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    // Endpoint to delete a todo by id
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable Long id) {
        taskService.deleteTask(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
