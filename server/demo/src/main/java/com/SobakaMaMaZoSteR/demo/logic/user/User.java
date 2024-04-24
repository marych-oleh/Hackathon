package com.SobakaMaMaZoSteR.demo.logic.user;


/**
 * This class is responsible for user interactions
 * and is used in auth.
 */
public class User {
    private String userId;
    private String userName;
    private String email;
    private String password;
    private String phoneNumber;

    // Enumeration that decides what child class will the User upcast
    private Role userRole;
}
