package com.lunessa.backend.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lunessa.backend.model.User;
import com.lunessa.backend.repository.UserRepository;
import com.lunessa.backend.service.EmailService;

@RestController
@RequestMapping("/api/checkout")

@CrossOrigin("*")

public class CheckoutController {

    @Autowired
    private EmailService emailService;

    @Autowired
    private UserRepository userRepository;

    // =====================================================
    // 🌸 PAYMENT API
    // =====================================================

    @PostMapping("/pay")

    public String processPayment(

            @RequestBody Map<String, Object> data

    ) {

        try {

            // =====================================================
            // 🌸 GET USER DATA
            // =====================================================

            String name =
                    data.get("name").toString();

            String email =
                    data.get("email").toString();

            String address =
                    data.get("address").toString();

            double total =
                    Double.parseDouble(
                            data.get("total").toString()
                    );

            // =====================================================
            // 🌸 GET CART
            // =====================================================

            List<Map<String, Object>> cart =

                    (List<Map<String, Object>>)
                            data.get("cart");

            // =====================================================
            // 🌸 FIND USER
            // =====================================================

            Optional<User> optionalUser =
                    userRepository.findByEmail(
                            email
                    );

            // =====================================================
            // 🌸 EMAIL CONTENT
            // =====================================================

            StringBuilder receipt =
                    new StringBuilder();

            receipt.append(
                    "Hello "
            ).append(name).append(",\n\n");

            receipt.append(
                    "✨ Thank you for shopping with Lunessa ✨\n\n"
            );

            receipt.append(
                    "🛍 ORDER DETAILS\n\n"
            );

            StringBuilder orderNames =
                    new StringBuilder();

            for (
                    Map<String, Object> item : cart
            ) {

                String itemName =
                        item.get("name").toString();

                receipt.append("• ");

                receipt.append(
                        itemName
                );

                receipt.append("  x");

                receipt.append(
                        item.get("quantity")
                );

                receipt.append("\n");

                // 🌸 SAVE ORDER NAMES
                orderNames
                        .append(itemName)
                        .append(",");
            }

            receipt.append("\n");

            receipt.append(
                    "💳 Total Amount: ₹"
            ).append(total).append("\n\n");

            receipt.append(
                    "📍 Delivery Address:\n"
            ).append(address).append("\n\n");

            receipt.append(
                    "🌸 Your wellness products will be delivered soon.\n\n"
            );

            receipt.append(
                    "Need help?\n"
            );

            receipt.append(
                    "📧 lunessa.support@gmail.com\n"
            );

            receipt.append(
                    "📱 +91 7856483799\n\n"
            );

            receipt.append(
                    "Love,\nTeam Lunessa 💖"
            );

            // =====================================================
            // 🌸 SEND RECEIPT EMAIL
            // =====================================================

            emailService.sendReceipt(

                    email,

                    "Lunessa Order Confirmation 💖",

                    receipt.toString()
            );

            // =====================================================
            // 🌸 UPDATE USER PROFILE DATA
            // =====================================================

            if (optionalUser.isPresent()) {

                User user =
                        optionalUser.get();

                // 🌸 UPDATE TOTAL ORDERS
                user.setTotalOrders(
                        user.getTotalOrders() + cart.size()
                );

                // 🌸 UPDATE RECENT ORDERS
                String oldOrders =
                        user.getRecentOrders();

                if (oldOrders == null) {

                    oldOrders = "";
                }

                user.setRecentOrders(

                        oldOrders +
                        orderNames.toString()

                );

                // 🌸 UPDATE WELLNESS SCORE
                user.setWellnessScore(

                        user.getWellnessScore() + 1

                );

                // 🌸 SAVE USER
                userRepository.save(user);
            }

            // =====================================================
            // 🌸 SUCCESS
            // =====================================================

            return "Payment Successful";

        } catch (Exception e) {

            e.printStackTrace();

            return "Payment Failed";
        }
    }
}