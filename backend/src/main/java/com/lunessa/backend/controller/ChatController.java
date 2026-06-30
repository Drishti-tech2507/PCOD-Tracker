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
@CrossOrigin(origins = "*")
public class ChatController {

    // 🔁 Use Groq API key
    @Value("${groq.api.key}")
    private String groqApiKey;

    // Groq endpoint (OpenAI-compatible)
    private static final String GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

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
    private final Map<String, List<Map<String, Object>>> sessions = new HashMap<>();

    @PostMapping
    public Map<String, String> chat(@RequestBody Map<String, String> body) {
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

        // 🌸 ADD USER MESSAGE TO HISTORY (stored in your internal format)
        Map<String, Object> userTurn = new HashMap<>();
        userTurn.put("role", "user");
        List<Map<String, String>> userParts = new ArrayList<>();
        Map<String, String> userPart = new HashMap<>();
        userPart.put("text", message);
        userParts.add(userPart);
        userTurn.put("parts", userParts);
        history.add(userTurn);

        try {
            // 🌸 BUILD GROQ REQUEST BODY
            Map<String, Object> requestBody = new HashMap<>();
            // Choose a model – you can change this to any Groq-supported model
            requestBody.put("model", "llama-3.3-70b-versatile");
            requestBody.put("temperature", 0.8);

            // Build messages list in Groq format: [ { role, content }, ... ]
            List<Map<String, String>> messages = new ArrayList<>();

            // 1) System instruction as a system message
            Map<String, String> systemMsg = new HashMap<>();
            systemMsg.put("role", "system");
            systemMsg.put("content", SYSTEM_INSTRUCTION);
            messages.add(systemMsg);

            // 2) Convert entire conversation history (excluding system)
            for (Map<String, Object> turn : history) {
                String role = (String) turn.get("role");
                // Map internal "model" to "assistant" for Groq
                if ("model".equals(role)) {
                    role = "assistant";
                }
                // Extract text from the parts list (assume only one part per turn)
                List<Map<String, String>> parts = (List<Map<String, String>>) turn.get("parts");
                String content = parts.get(0).get("text");
                Map<String, String> msg = new HashMap<>();
                msg.put("role", role);
                msg.put("content", content);
                messages.add(msg);
            }

            requestBody.put("messages", messages);

            // 🌸 CALL GROQ API
            WebClient webClient = WebClient.builder().build();

            Map<String, Object> groqResponse = webClient.post()
                .uri(GROQ_URL)
                .header("Content-Type", "application/json")
                .header("Authorization", "Bearer " + groqApiKey)
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(Map.class)
                .block();

            // 🌸 EXTRACT REPLY TEXT
            String replyText = extractGroqReply(groqResponse);

            // 🌸 ADD BOT REPLY TO HISTORY (store in your internal format: role "model")
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

    // 🌸 HELPER: EXTRACT TEXT FROM GROQ RESPONSE (OpenAI-compatible)
    @SuppressWarnings("unchecked")
    private String extractGroqReply(Map<String, Object> groqResponse) {
        try {
            List<Map<String, Object>> choices =
                (List<Map<String, Object>>) groqResponse.get("choices");
            Map<String, Object> firstChoice = choices.get(0);
            Map<String, Object> message = (Map<String, Object>) firstChoice.get("message");
            return (String) message.get("content");
        } catch (Exception e) {
            return "Main samajh nahi payi 🌸 Thoda aur batao?";
        }
    }
}