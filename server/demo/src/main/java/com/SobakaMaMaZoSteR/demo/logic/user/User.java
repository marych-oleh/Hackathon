package com.SobakaMaMaZoSteR.demo.logic.user;


import com.fasterxml.jackson.databind.annotation.EnumNaming;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

/**
 * This class is responsible for user interactions
 * and is used in auth.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    private String userId;
    private String userName;
    private String email;
    private String password;
    private String phoneNumber;

    // Enumeration that decides what child class will the User upcast
    private Role userRole;
}
