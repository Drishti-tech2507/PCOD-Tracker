package com.lunessa.backend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lunessa.backend.service.EmailService;

@RestController
@RequestMapping("/api/email")
@CrossOrigin(origins = "*")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/login")
    public Map<String, String> sendLoginMail(@RequestBody Map<String, String> request) {

        String email = request.get("email");

        Map<String, String> response = new HashMap<>();

        try {

            emailService.sendLoginEmail(email);

            response.put("message", "Email sent successfully");

        } catch (Exception e) {

            response.put("message", "Failed to send email");
        }

        return response;
    }
}