package com.SobakaMaMaZoSteR.demo.logic.auth;

import com.SobakaMaMaZoSteR.demo.logic.config.JwtService;
import com.SobakaMaMaZoSteR.demo.logic.user.Role;
import com.SobakaMaMaZoSteR.demo.logic.user.User;
import com.SobakaMaMaZoSteR.demo.logic.user.civiluser.CivilUser;
import com.SobakaMaMaZoSteR.demo.logic.user.civiluser.CivilUserRepository;
import com.SobakaMaMaZoSteR.demo.logic.user.user_router.UserRouter;
import com.SobakaMaMaZoSteR.demo.logic.user.user_router.UserRouterRepository;
import com.SobakaMaMaZoSteR.demo.logic.user.volunteeruser.VolunteerUser;
import com.SobakaMaMaZoSteR.demo.logic.user.volunteeruser.VolunteerUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * Contains methods to register and authenticate User;
 * --
 * Works with JwtTokens and Authentication Responses
 */
@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRouterRepository userRouterRepository;
    private final CivilUserRepository civilUserRepository;
    private final VolunteerUserRepository volunteerUserRepository;

    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    /**
     * This method registers and saves our different users in DBs
     * --
     * The information needed is common and relates to the parent User class,
     * so no need to worry, other fields that are in these classes will
     * be set accordingly to the USER_ROLE
     * --
     * @param request - request coming form the API
     * @return - AuthenticationResponse
     */
    public AuthenticationResponse register(RegisterRequest request) {
        User userTemplate = User.builder()
                .userName(request.getUserName())
                .password(passwordEncoder.encode(request.getPassword())) // hashing
                .phoneNumber(request.getPhoneNumber())
                .email(request.getEmail())
                .passport(request.getPassport())
                .userRole(request.getUserRole())
                .build();
        System.out.println("\n\n> USER TEMPLATE: " + userTemplate);

        /*
         * Depending on the userRole we'll save that user in a different rep.
         */
        if (Role.USER_CIVIL == request.getUserRole()) {
            CivilUser newUser = new CivilUser(userTemplate);
            civilUserRepository.save(newUser);

            userRouterRepository.save(
                    new UserRouter(newUser.getUserId(), newUser.getEmail(), newUser.getUserRole())
            );
        }
        if (Role.USER_VOLUNTEER == request.getUserRole()) {
            VolunteerUser newUser = new VolunteerUser(userTemplate);
            volunteerUserRepository.save(newUser);
            userRouterRepository.save(
                    new UserRouter(newUser.getUserId(), newUser.getEmail(), newUser.getUserRole())
            );
        }
        System.out.println("after - " + userRouterRepository.findByUserEmail(userTemplate.getEmail()));
        var jwtToken = jwtService.generateToken(userTemplate);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    /**
     * This method authenticates users
     * --
     * The information needed is common and relates to the parent User class,
     * so no need to worry, other fields that are in these classes will
     * be set accordingly to the USER_ROLE
     * --
     * @param request - request coming form the API
     * @return - AuthenticationResponse
     */
    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        /*
           I look in a specifically designed for that MongoSchema
           and search for a Role that corresponds to a specific Email
           and than search in the respectable Table;
         */
        UserRouter userRouter = userRouterRepository.findByUserEmail(request.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException(
                        "User Not Found!"
                ));
        User user = null;
        if (Role.USER_CIVIL == userRouter.getRole()) {
            user = civilUserRepository.findByEmail(request.getEmail())
                    .orElseThrow();
        }
        if (Role.USER_VOLUNTEER == userRouter.getRole()) {
            user = volunteerUserRepository.findByEmail(request.getEmail())
                    .orElseThrow();
        }
        System.out.println("after - " + userRouterRepository.findByUserEmail(user.getEmail()));
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }


}
