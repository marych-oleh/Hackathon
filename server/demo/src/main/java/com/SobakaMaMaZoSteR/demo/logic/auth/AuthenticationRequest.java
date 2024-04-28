package com.SobakaMaMaZoSteR.demo.logic.auth;

import com.SobakaMaMaZoSteR.demo.logic.user.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Gets retrieved from Front-end
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationRequest {
    private String email;
    String password;

    // v.1 -- added that so the server will know where to look for the User for
    // (in the Civil Table ot the Volunteer Table)

    // decided that it's not worth it
    //private Role role;
}
