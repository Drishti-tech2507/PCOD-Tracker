// FULL ForgotPasswordController.java
// PLACE INSIDE:
// src/main/java/com/lunessa/backend/controller/ForgotPasswordController.java

package com.lunessa.backend.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lunessa.backend.model.User;
import com.lunessa.backend.repository.UserRepository;

@RestController
@RequestMapping("/api/password")
@CrossOrigin(origins = "http://localhost:5173")
public class ForgotPasswordController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JavaMailSender mailSender;

    // 🌸 STORE OTP TEMPORARILY
    private Map<String, String> otpStorage =
            new HashMap<>();

    // =====================================================
    // 🌸 SEND OTP
    // =====================================================

    @PostMapping("/send-otp")
    public ResponseEntity<?> sendOtp(
            @RequestBody Map<String, String> request
    ) {

        String email =
                request.get("email");

        Optional<User> userOptional =
                userRepository.findByEmail(email);

        // USER NOT FOUND
        if (userOptional.isEmpty()) {

            return ResponseEntity.badRequest().body(
                    Map.of(
                            "message",
                            "No account found with this email"
                    )
            );
        }

        // GENERATE OTP
        String otp =
                String.valueOf(
                        100000 + new Random().nextInt(900000)
                );

        // SAVE OTP
        otpStorage.put(email, otp);

        // SEND EMAIL
        try {

            SimpleMailMessage message =
                    new SimpleMailMessage();

            message.setTo(email);

            message.setFrom(
                    "lunessa.support@gmail.com"
            );

            message.setSubject(
                    "Lunessa Password Reset OTP 💖"
            );

            message.setText(

                    "Hello from Lunessa 🌸\n\n" +

                    "Your password reset OTP is:\n\n" +

                    " " + otp + " \n\n" +

                    "This OTP is valid for a short duration.\n\n" +

                    "If you did not request this reset, please ignore this email.\n\n" +

                    "With love,\n" +
                    "Team Lunessa "
            );

            mailSender.send(message);

            return ResponseEntity.ok(
                    Map.of(
                            "message",
                            "OTP sent successfully"
                    )
            );

        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity.badRequest().body(
                    Map.of(
                            "message",
                            "Failed to send OTP"
                    )
            );
        }
    }

    // =====================================================
    // 🌸 VERIFY OTP
    // =====================================================

    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOtp(
            @RequestBody Map<String, String> request
    ) {

        String email =
                request.get("email");

        String otp =
                request.get("otp");

        String savedOtp =
                otpStorage.get(email);

        if (
                savedOtp == null ||
                !savedOtp.equals(otp)
        ) {

            return ResponseEntity.badRequest().body(
                    Map.of(
                            "message",
                            "Invalid OTP"
                    )
            );
        }

        return ResponseEntity.ok(
                Map.of(
                        "message",
                        "OTP verified"
                )
        );
    }

    // =====================================================
    // 🌸 RESET PASSWORD
    // =====================================================

    @PostMapping("/reset")
    public ResponseEntity<?> resetPassword(
            @RequestBody Map<String, String> request
    ) {

        String email =
                request.get("email");

        String newPassword =
                request.get("password");

        Optional<User> userOptional =
                userRepository.findByEmail(email);

        if (userOptional.isEmpty()) {

            return ResponseEntity.badRequest().body(
                    Map.of(
                            "message",
                            "User not found"
                    )
            );
        }

        User user =
                userOptional.get();

        // UPDATE PASSWORD
        user.setPassword(newPassword);

        userRepository.save(user);

        // REMOVE OTP
        otpStorage.remove(email);

        return ResponseEntity.ok(
                Map.of(
                        "message",
                        "Password reset successful"
                )
        );
    }
}