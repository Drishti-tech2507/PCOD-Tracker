package com.lunessa.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    // =====================================================
    // 🌸 NEW USER WELCOME EMAIL
    // =====================================================

    public void sendWelcomeEmail(

            String toEmail,

            String name

    ) {

        try {

            SimpleMailMessage message =
                    new SimpleMailMessage();

            message.setTo(toEmail);

            message.setFrom(
                    "lunessa.support@gmail.com"
            );

            message.setSubject(
                    "Welcome To Lunessa 💖"
            );

            message.setText(

                    "Dear " + name + ",\n\n" +

                    "✨ Welcome to Lunessa ✨\n\n" +

                    "Your account has been successfully created.\n\n" +

                    "Lunessa is your wellness companion for:\n\n" +

                    "🌸 PCOD & PCOS Support\n" +
                    "🌸 Personalized Wellness Plans\n" +
                    "🌸 Nutrition & Fitness Guidance\n" +
                    "🌸 Self-Care Tracking\n" +
                    "🌸 Wellness Shopping\n" +
                    "🌸 Sakhi AI Wellness Companion\n\n" +

                    "We are truly happy to have you in our wellness family 💖\n\n" +

                    "Warm Regards,\n" +
                    "Team Lunessa 🌸\n\n" +

                    "📧 Support Email:\n" +
                    "lunessa.support@gmail.com\n\n" +

                    "📱 Support Contact:\n" +
                    "+91 7856483799"
            );

            mailSender.send(message);

            System.out.println(
                    "WELCOME EMAIL SENT"
            );

        } catch (Exception e) {

            System.out.println(
                    "WELCOME EMAIL FAILED"
            );

            e.printStackTrace();
        }
    }

    // =====================================================
    // 🌸 WELCOME BACK EMAIL
    // =====================================================

    public void sendWelcomeBackEmail(

            String toEmail,

            String name

    ) {

        try {

            SimpleMailMessage message =
                    new SimpleMailMessage();

            message.setTo(toEmail);

            message.setFrom(
                    "lunessa.support@gmail.com"
            );

            message.setSubject(
                    "Welcome Back To Lunessa 🌸"
            );

            message.setText(

                    "Hello " + name + ",\n\n" +

                    "💖 Welcome back to Lunessa 💖\n\n" +

                    "We noticed a successful login to your account.\n\n" +

                    "Your wellness journey continues here 🌿\n\n" +

                    "You can continue exploring:\n\n" +

                    "✨ Personalized wellness guidance\n" +
                    "✨ PCOD & PCOS care support\n" +
                    "✨ Nutrition & exercise plans\n" +
                    "✨ Wellness products\n" +
                    "✨ Sakhi AI wellness assistant\n\n" +

                    "If this login was not performed by you,\n" +
                    "please change your password immediately.\n\n" +

                    "Warm regards,\n" +
                    "Team Lunessa 💖\n\n" +

                    "📧 Support Email:\n" +
                    "lunessa.support@gmail.com\n\n" +

                    "📱 Support Contact:\n" +
                    "+91 7856483799"
            );

            mailSender.send(message);

            System.out.println(
                    "WELCOME BACK EMAIL SENT"
            );

        } catch (Exception e) {

            System.out.println(
                    "WELCOME BACK EMAIL FAILED"
            );

            e.printStackTrace();
        }
    }

    // =====================================================
    // 🌸 LOGIN EMAIL (OLD METHOD)
    // =====================================================

    public void sendLoginEmail(
            String toEmail
    ) {

        try {

            SimpleMailMessage message =
                    new SimpleMailMessage();

            message.setTo(toEmail);

            message.setFrom(
                    "lunessa.support@gmail.com"
            );

            message.setSubject(
                    "Welcome to Lunessa 💖"
            );

            message.setText(

                    "We noticed a successful login to your Lunessa account.\n\n" +

                    "✨ Your account was accessed successfully, and you’re all set to continue exploring a personalized wellness and beauty experience with Lunessa.\n\n" +

                    "If this was you, no further action is needed.\n\n" +

                    "If you did not log in to your account, we recommend changing your password immediately and reviewing your account activity for security purposes.\n\n" +

                    "Thank you for choosing Lunessa 💜\n\n" +

                    "Warm regards,\n" +
                    "Team Lunessa"
            );

            mailSender.send(message);

            System.out.println(
                    "LOGIN EMAIL SENT"
            );

        } catch (Exception e) {

            System.out.println(
                    "LOGIN EMAIL FAILED"
            );

            e.printStackTrace();
        }
    }

    // =====================================================
    // 🌸 ORDER RECEIPT EMAIL
    // =====================================================

    public void sendReceipt(

            String toEmail,

            String subject,

            String body

    ) {

        try {

            SimpleMailMessage message =
                    new SimpleMailMessage();

            message.setTo(toEmail);

            message.setFrom(
                    "lunessa.support@gmail.com"
            );

            message.setSubject(subject);

            message.setText(body);

            mailSender.send(message);

            System.out.println(
                    "RECEIPT EMAIL SENT"
            );

        } catch (Exception e) {

            System.out.println(
                    "RECEIPT EMAIL FAILED"
            );

            e.printStackTrace();
        }
    }
}