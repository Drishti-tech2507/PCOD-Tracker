package com.lunessa.backend.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lunessa.backend.model.DietPlan;
import com.lunessa.backend.repository.DietPlanRepository;
import com.lunessa.backend.service.WellnessEmailService;

@RestController
@RequestMapping("/api/diet")
@CrossOrigin(origins = "http://localhost:5173")
public class DietPlanController {

    @Autowired
    private DietPlanRepository repository;
    @Autowired
private WellnessEmailService emailService;

    @PostMapping("/generate")
    public DietPlan generatePlan(
            @RequestBody DietPlan request
    ) {

        String generated = "";

        if (
            request.getConditionType().equals("PCOD")
        ) {

            generated =
                "🌞 Morning: Lemon Water\n" +
                "🍓 Breakfast: Oats Bowl\n" +
                "🥗 Lunch: Quinoa Salad\n" +
                "☕ Evening: Green Tea\n" +
                "🍲 Dinner: Vegetable Soup";
        }

        else if (
            request.getConditionType().equals("PCOS")
        ) {

            generated =
                "🌞 Morning: Detox Water\n" +
                "🍓 Breakfast: Greek Yogurt\n" +
                "🥗 Lunch: Brown Rice Bowl\n" +
                "☕ Evening: Nuts & Tea\n" +
                "🍲 Dinner: Stir Fry Veggies";
        }

        else {

            generated =
                "🌞 Morning: Chia Water\n" +
                "🍓 Breakfast: Smoothie Bowl\n" +
                "🥗 Lunch: Protein Salad\n" +
                "☕ Evening: Herbal Tea\n" +
                "🍲 Dinner: Soup & Toast";
        }

        request.setGeneratedPlan(generated);
        emailService.sendWellnessPlan(
        request.getEmail(),
        generated
);

        return repository.save(request);
    }
}