package com.aymen.todolist.service;


import com.aymen.todolist.model.Task;
import com.aymen.todolist.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task createTask(String taskDescription) {
        Task task = new Task();
        task.setTaskDescription(taskDescription);
        return taskRepository.save(task);
    }

    public Task updateTask(Long id) {
        Optional<Task> optionalTask = taskRepository.findById(id);

        if (optionalTask.isPresent()) {
            Task existingTask = optionalTask.get();

            existingTask.setComplete(!(existingTask.getComplete()));

            return taskRepository.save(existingTask);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found with id: " + id);
        }
    }

    public void deleteTask(Long id) {
        try {
            taskRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found with id: " + id);
        }
    }
}