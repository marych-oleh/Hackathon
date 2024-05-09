package com.SobakaMaMaZoSteR.demo.logic.auth;


import com.SobakaMaMaZoSteR.demo.logic.config.UrlConfig;
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
@CrossOrigin(origins = UrlConfig.ORIGIN_URL)
@RequestMapping(UrlConfig.MAPPING_PREFIX + "/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService service;

    /**
     * Register users and adds it to DB;
     * If User with such email already exists - throws an Exception
     *
     * @param request - a user to register
     * @return Response entity of user if no exceptions was thrown
     * @throws IllegalAccessException if proposed user already exists in a DataBase
     */
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ) throws IllegalAccessException {
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
