package com.SobakaMaMaZoSteR.demo.logic.auth;

import com.SobakaMaMaZoSteR.demo.logic.user.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    private String token;

    // added cause Oleh just can't leave me at peace
    private Role role;
}
