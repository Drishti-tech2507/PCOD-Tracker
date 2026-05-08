package com.lunessa.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    // 🌸 BASIC INFO
    private String name;

    @Column(unique = true)
    private String email;

    private String password;

    // 🌸 PROFILE IMAGE
    private String image;

    // 🌸 REAL PROFILE DATA
    private int loginCount;

    private int totalOrders;

    private int wellnessScore;

    private int selfCareDays;

    // 🌸 SAVED PLANS
    @Column(length = 3000)
    private String savedPlans;

    // 🌸 RECENT ORDERS
    @Column(length = 3000)
    private String recentOrders;

    // =====================================================
    // 🌸 CONSTRUCTOR
    // =====================================================

    public User() {
    }

    // =====================================================
    // 🌸 GETTERS & SETTERS
    // =====================================================

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // -----------------------------------------------------

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // -----------------------------------------------------

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // -----------------------------------------------------

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // -----------------------------------------------------

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    // -----------------------------------------------------

    public int getLoginCount() {
        return loginCount;
    }

    public void setLoginCount(int loginCount) {
        this.loginCount = loginCount;
    }

    // -----------------------------------------------------

    public int getTotalOrders() {
        return totalOrders;
    }

    public void setTotalOrders(int totalOrders) {
        this.totalOrders = totalOrders;
    }

    // -----------------------------------------------------

    public int getWellnessScore() {
        return wellnessScore;
    }

    public void setWellnessScore(int wellnessScore) {
        this.wellnessScore = wellnessScore;
    }

    // -----------------------------------------------------

    public int getSelfCareDays() {
        return selfCareDays;
    }

    public void setSelfCareDays(int selfCareDays) {
        this.selfCareDays = selfCareDays;
    }

    // -----------------------------------------------------

    public String getSavedPlans() {
        return savedPlans;
    }

    public void setSavedPlans(String savedPlans) {
        this.savedPlans = savedPlans;
    }

    // -----------------------------------------------------

    public String getRecentOrders() {
        return recentOrders;
    }

    public void setRecentOrders(String recentOrders) {
        this.recentOrders = recentOrders;
    }
}