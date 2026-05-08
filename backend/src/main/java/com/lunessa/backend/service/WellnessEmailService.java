package com.lunessa.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class WellnessEmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendWellnessPlan(
            String toEmail,
            String plan
    ) {

        SimpleMailMessage message =
                new SimpleMailMessage();

        message.setTo(toEmail);

        message.setSubject(
                "Your Personalized Wellness Plan 💖"
        );

        message.setText(

                "Hello from Lunessa ✨\n\n"

                + "Your personalized wellness plan "
                + "has been generated successfully.\n\n"

                + plan

                + "\n\nStay healthy and consistent 🌸"

                + "\n\nLove,\nTeam Lunessa 💜"
        );

        mailSender.send(message);
    }
}