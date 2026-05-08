package com.lunessa.backend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin("*")

public class ChatController {

    @PostMapping
    public Map<String, String> chat(
            @RequestBody Map<String, String> body
    ) {

        String message =
                body.get("message");

        if (message == null) {
            message = "";
        }

        message =
                message.toLowerCase();

        Map<String, String> response =
                new HashMap<>();

        // 🌸 GREETING
        if (
                message.contains("hello") ||
                message.contains("hi")
        ) {

            response.put(
                    "reply",

                    "Hello beautiful 🌸\nMain hoon Sakhi — tumhari wellness friend 💖"
            );
        }

        // 🌸 PCOD
        else if (
                message.contains("pcod")
        ) {

            response.put(
                    "reply",

                    "PCOD ek hormonal condition hai 🌸\n\nHealthy diet, yoga, sleep aur stress management help karte hain 💖"
            );
        }

        // 🌸 PCOS
        else if (
                message.contains("pcos")
        ) {

            response.put(
                    "reply",

                    "PCOS hormonal imbalance se related hota hai 🌿\n\nHealthy lifestyle bahut help karta hai 💖"
            );
        }

        // 🌸 PERIODS
        else if (
                message.contains("period")
        ) {

            response.put(
                    "reply",

                    "Periods natural hain 🌸\n\nHydration aur rest important hote hain 💖"
            );
        }

        // 🌸 DEFAULT
        else {

            response.put(
                    "reply",

                    "Main hamesha aapke saath hoon 🌸 Ask me anything about wellness 💖"
            );
        }

        return response;
    }
}