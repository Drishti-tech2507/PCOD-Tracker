package com.lunessa.backend.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "*")
public class ChatController {

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    private final WebClient webClient = WebClient.builder().build();

    private static final String GEMINI_URL =
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

    private static final String SYSTEM_INSTRUCTION =
            "You are Sakhi, a warm, friendly wellness chatbot for Lunessa. " +
            "Help users regarding PCOD, periods, women's health, nutrition, lifestyle and self-care. " +
            "Never diagnose diseases or prescribe medicines. " +
            "Reply in simple Hinglish with a caring tone.";

    private final Map<String, List<Map<String, Object>>> sessions = new HashMap<>();

    @PostMapping
    public Map<String, String> chat(@RequestBody Map<String, String> body) {

        Map<String, String> response = new HashMap<>();

        String message = body.get("message");
        String sessionId = body.get("sessionId");

        if (message == null || message.trim().isEmpty()) {
            response.put("reply", "Please type something 🌸");
            return response;
        }

        if (sessionId == null || sessionId.isBlank()) {
            sessionId = UUID.randomUUID().toString();
        }

        if (geminiApiKey == null || geminiApiKey.isBlank()) {
            response.put("reply", "Gemini API key is missing.");
            return response;
        }

        sessions.putIfAbsent(sessionId, new ArrayList<>());

        List<Map<String, Object>> history = sessions.get(sessionId);

        Map<String, Object> userTurn = new HashMap<>();
        userTurn.put("role", "user");

        List<Map<String, String>> userParts = new ArrayList<>();
        Map<String, String> userText = new HashMap<>();
        userText.put("text", message);

        userParts.add(userText);

        userTurn.put("parts", userParts);

        history.add(userTurn);

        try {

            Map<String, Object> request = new HashMap<>();

            Map<String, Object> system = new HashMap<>();

            List<Map<String, String>> systemParts = new ArrayList<>();

            Map<String, String> s = new HashMap<>();

            s.put("text", SYSTEM_INSTRUCTION);

            systemParts.add(s);

            system.put("parts", systemParts);

            request.put("system_instruction", system);

            request.put("contents", history);

            Map<String, Object> generation = new HashMap<>();
            generation.put("temperature", 0.8);

            request.put("generationConfig", generation);

            Map<String, Object> geminiResponse = webClient.post()
                    .uri(GEMINI_URL + "?key=" + geminiApiKey)
                    .contentType(MediaType.APPLICATION_JSON)
                    .bodyValue(request)
                    .retrieve()
                    .bodyToMono(Map.class)
                    .block();

            String reply = extractReply(geminiResponse);

            Map<String, Object> botTurn = new HashMap<>();

            botTurn.put("role", "model");

            List<Map<String, String>> botParts = new ArrayList<>();

            Map<String, String> botText = new HashMap<>();

            botText.put("text", reply);

            botParts.add(botText);

            botTurn.put("parts", botParts);

            history.add(botTurn);

            response.put("reply", reply);

            return response;

        } catch (Exception e) {

            e.printStackTrace();

            if (!history.isEmpty()) {
                history.remove(history.size() - 1);
            }

            response.put(
                    "reply",
                    "Sakhi is temporarily unavailable 🌸 Please try again after some time."
            );

            return response;
        }
    }

    @SuppressWarnings("unchecked")
    private String extractReply(Map<String, Object> geminiResponse) {

        try {

            List<Map<String, Object>> candidates =
                    (List<Map<String, Object>>) geminiResponse.get("candidates");

            if (candidates == null || candidates.isEmpty()) {
                return "I couldn't generate a response.";
            }

            Map<String, Object> candidate = candidates.get(0);

            Map<String, Object> content =
                    (Map<String, Object>) candidate.get("content");

            List<Map<String, Object>> parts =
                    (List<Map<String, Object>>) content.get("parts");

            return parts.get(0).get("text").toString();

        } catch (Exception e) {

            return "Main samajh nahi payi 🌸 Thoda aur batao.";

        }
    }

}
