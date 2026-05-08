package com.lunessa.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lunessa.backend.model.DietPlan;

public interface DietPlanRepository
        extends JpaRepository<DietPlan, Long> {
}