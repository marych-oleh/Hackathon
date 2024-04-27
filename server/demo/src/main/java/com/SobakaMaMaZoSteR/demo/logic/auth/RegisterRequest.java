package com.SobakaMaMaZoSteR.demo.logic.auth;

import com.SobakaMaMaZoSteR.demo.logic.user.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
    private String userName;
    private String email;
    private String password;
    private String phoneNumber;

    // Enumeration that decides what child class will the User upcast
    private Role userRole;

    // I don't need that in the Civil User but Volunteer needs that
    // so I'll provide both with this field
    private String passport;
}
