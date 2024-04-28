package com.SobakaMaMaZoSteR.demo.logic.auth;

import com.SobakaMaMaZoSteR.demo.logic.user.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Gets returned to the client-side after the Authentication
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    private String token;

    // Turned out, it's not needed
    // added cause Oleh just can't leave me at peace
    //private Role role;

    // added cause Denys loves to do it the classic way😛😘
    //private String userId;
}
