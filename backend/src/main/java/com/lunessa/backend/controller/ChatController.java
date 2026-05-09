package com.lunessa.backend.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin("*")
public class ChatController {

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    private static final String GEMINI_URL =
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

    private static final String SYSTEM_INSTRUCTION =
        "# ROLE\n" +
        "You are Sakhi – a warm, friendly, and knowledgeable chatbot for young women in India.\n" +
        "You spread awareness about menstrual health and PCOD like a trusted older sister.\n\n" +
        "# PERSONALITY\n" +
        "- Friendly, Warm, Non-judgmental, Encouraging, Relatable, Empowering.\n" +
        "- Use emojis sparingly (🌸, 👋, 😊).\n" +
        "- Use Hinglish naturally (e.g., Ghar ka khana, Periods ke time).\n" +
        "- Use simple language, avoid medical jargon.\n" +
        "- Use GenZ language occasionally to connect with younger users.\n\n" +
        "# RESPONSIBILITIES\n" +
        "1. Menstrual Health Education (Cycles, hygiene, cramps).\n" +
        "2. PCOD Awareness (Symptoms, lifestyle, Indian nutrition).\n" +
        "3. Emotional Support (Listen, validate, encourage).\n" +
        "4. Myth Busting (Gently correct taboos).\n" +
        "5. Guiding to Doctors (Encourage professional help for diagnosis).\n\n" +
        "# BOUNDARIES\n" +
        "- Do NOT diagnose or prescribe medicine.\n" +
        "- Suggest a doctor for severe pain or heavy bleeding.\n";

    // 🌸 IN-MEMORY SESSION STORE (per conversation, resets on server restart)
    // For production, use Redis or database-backed sessions
    private final Map<String, List<Map<String, Object>>> sessions = new HashMap<>();

    @PostMapping
    public Map<String, String> chat(
            @RequestBody Map<String, String> body
    ) {
        String message = body.get("message");
        String sessionId = body.get("sessionId");

        if (message == null || message.trim().isEmpty()) {
            Map<String, String> error = new HashMap<>();
            error.put("reply", "Kuch to likho yarr! 😅");
            return error;
        }

        if (sessionId == null || sessionId.isEmpty()) {
            sessionId = "default";
        }

        // 🌸 GET OR CREATE HISTORY FOR THIS SESSION
        sessions.putIfAbsent(sessionId, new ArrayList<>());
        List<Map<String, Object>> history = sessions.get(sessionId);

        // 🌸 ADD USER MESSAGE TO HISTORY
        Map<String, Object> userTurn = new HashMap<>();
        userTurn.put("role", "user");
        List<Map<String, String>> userParts = new ArrayList<>();
        Map<String, String> userPart = new HashMap<>();
        userPart.put("text", message);
        userParts.add(userPart);
        userTurn.put("parts", userParts);
        history.add(userTurn);

        try {
            // 🌸 BUILD GEMINI REQUEST BODY
            Map<String, Object> requestBody = new HashMap<>();

            // System instruction
            Map<String, Object> systemInstruction = new HashMap<>();
            List<Map<String, String>> systemParts = new ArrayList<>();
            Map<String, String> systemPart = new HashMap<>();
            systemPart.put("text", SYSTEM_INSTRUCTION);
            systemParts.add(systemPart);
            systemInstruction.put("parts", systemParts);
            requestBody.put("system_instruction", systemInstruction);

            // Conversation history
            requestBody.put("contents", history);

            // Generation config
            Map<String, Object> generationConfig = new HashMap<>();
            generationConfig.put("temperature", 0.8);
            requestBody.put("generationConfig", generationConfig);

            // 🌸 CALL GEMINI API
            WebClient webClient = WebClient.builder().build();

            Map<String, Object> geminiResponse = webClient.post()
                .uri(GEMINI_URL + "?key=" + geminiApiKey)
                .header("Content-Type", "application/json")
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(Map.class)
                .block();

            // 🌸 EXTRACT REPLY TEXT
            String replyText = extractReply(geminiResponse);

            // 🌸 ADD BOT REPLY TO HISTORY
            Map<String, Object> modelTurn = new HashMap<>();
            modelTurn.put("role", "model");
            List<Map<String, String>> modelParts = new ArrayList<>();
            Map<String, String> modelPart = new HashMap<>();
            modelPart.put("text", replyText);
            modelParts.add(modelPart);
            modelTurn.put("parts", modelParts);
            history.add(modelTurn);

            // 🌸 RETURN REPLY
            Map<String, String> response = new HashMap<>();
            response.put("reply", replyText);
            return response;

        } catch (Exception e) {
            e.printStackTrace();

            // 🌸 REMOVE THE USER MESSAGE FROM HISTORY IF API CALL FAILED
            history.remove(history.size() - 1);

            Map<String, String> error = new HashMap<>();
            error.put(
                "reply",
                "Arre yaar, Sakhi is having some trouble right now 🌸\n" +
                "Please try again in a moment 💖\n\n" +
                "📧 lunessa.support@gmail.com\n" +
                "📱 +91 7856483799"
            );
            return error;
        }
    }

    // 🌸 HELPER: EXTRACT TEXT FROM GEMINI RESPONSE
    @SuppressWarnings("unchecked")
    private String extractReply(Map<String, Object> geminiResponse) {
        try {
            List<Map<String, Object>> candidates =
                (List<Map<String, Object>>) geminiResponse.get("candidates");

            Map<String, Object> firstCandidate = candidates.get(0);
            Map<String, Object> content =
                (Map<String, Object>) firstCandidate.get("content");

            List<Map<String, Object>> parts =
                (List<Map<String, Object>>) content.get("parts");

            return (String) parts.get(0).get("text");

        } catch (Exception e) {
            return "Main samajh nahi payi 🌸 Thoda aur batao?";
        }
    }
}