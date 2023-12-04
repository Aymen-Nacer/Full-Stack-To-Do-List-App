package com.aymen.todolist.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;


import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;

@Entity(name="tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long task_id;

    @Column(nullable = false)
    private String task_description;

    @Column(nullable = false)
    private boolean complete;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    @Column(updatable = false, nullable = false)
    private Timestamp created_at;


    public Task() {

    }

    public Task(Long taskId, String taskDescription, boolean isComplete, Timestamp createdAt) {
        this.task_id = taskId;
        this.task_description = taskDescription;
        this.complete = isComplete;
        this.created_at = createdAt;
    }

    public Long getTaskId() {
        return task_id;
    }

    public void setTaskId(Long taskId) {
        this.task_id = taskId;
    }

    public String getTaskDescription() {
        return task_description;
    }

    public void setTaskDescription(String taskDescription) {
        this.task_description = taskDescription;
    }

    public boolean isComplete() {
        return complete;
    }

    public void setComplete(boolean complete) {
        this.complete = complete;
    }

    public Timestamp getCreatedAt() {
        return created_at;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.created_at = createdAt;
    }

    @Override
    public String toString() {
        return "Task{" +
                "taskId=" + task_id +
                ", taskDescription='" + task_description + '\'' +
                ", isComplete=" + complete +
                ", createdAt=" + created_at +
                '}';
    }
}
