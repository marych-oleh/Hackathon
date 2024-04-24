package com.SobakaMaMaZoSteR.demo.logic.auth;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Rest Controller for registration and authentication
 * --
 * The methods use the Authentication Service, which works both
 * with CivilUser and VolunteerUser taking only the parent-class-info
 * into consideration
 */
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }

    @GetMapping("")
    public ResponseEntity<String> demoTesting() {
        return ResponseEntity.ok("<h1 style=\"color: red\"> Demo Auth End-Point! </h1>");
    }
}
