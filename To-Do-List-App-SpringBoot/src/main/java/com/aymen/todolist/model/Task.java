package com.aymen.todolist.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity(name="tasks")
public class Task {
    @Id
    private Long taskId;

    @Column(nullable = false)
    private String taskDescription;

    @Column(nullable = false)
    private boolean isComplete;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    @Column(name = "created_at", updatable = false, nullable = false)
    private Date createdAt;


    protected Task() {}

    public Task(Long taskId, String taskDescription, boolean isComplete, Date createdAt) {
        this.taskId = taskId;
        this.taskDescription = taskDescription;
        this.isComplete = isComplete;
        this.createdAt = createdAt;
    }

    public Long getTaskId() {
        return taskId;
    }

    public void setTaskId(Long taskId) {
        this.taskId = taskId;
    }

    public String getTaskDescription() {
        return taskDescription;
    }

    public void setTaskDescription(String taskDescription) {
        this.taskDescription = taskDescription;
    }

    public boolean isComplete() {
        return isComplete;
    }

    public void setComplete(boolean complete) {
        isComplete = complete;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "Task{" +
                "taskId=" + taskId +
                ", taskDescription='" + taskDescription + '\'' +
                ", isComplete=" + isComplete +
                ", createdAt=" + createdAt +
                '}';
    }
}
