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
import jdk.jshell.spi.ExecutionControl;
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
     * If inserted in code will throw an IllegalAccessException
     * if user specified in the request is already defined and will allow the auth.process
     * ro continue otherwise;
     *
     * @param request - HttpRegister request gotten from the FrontApi
     * @throws IllegalAccessException - when user specified in request doesn't exist
     */
    private void checkIfUserExists(RegisterRequest request) throws IllegalAccessException {
        if (Role.USER_CIVIL == request.getUserRole() ) {
            if (civilUserRepository.findByEmail(request.getEmail()).isPresent()) {
                throw new IllegalAccessException("Such User already exists in\n\t>> CivilSchema!");
            }
        }
        else if (Role.USER_VOLUNTEER == request.getUserRole()) {
            if (volunteerUserRepository.findByEmail(request.getEmail()).isPresent()) {
                throw new IllegalAccessException("Such User already exists in\n\t>> VolunteerSchema!");
            }
        }
        else {
            throw new IllegalAccessException("NOW WE COUGTH AN ERROR");
        }
    }

    /**
     * This method registers and saves our different users in DBs
     * --
     * The information needed is common and relates to the parent User class,
     * so no need to worry, other fields that are in these classes will
     * be set accordingly to the USER_ROLE
     * --
     * @param request - request coming form the API
     * @return - AuthenticationResponse
     * @throws IllegalAccessException - if such user already exists
     */
    public AuthenticationResponse register(RegisterRequest request) throws IllegalAccessException {
        // first - check if it already exists
        this.checkIfUserExists(request);

        // build a parent class which will be used to create a token
        User userTemplate = User.builder()
                .userName(request.getUserName())
                .password(passwordEncoder.encode(request.getPassword())) // hashing
                .phoneNumber(request.getPhoneNumber())
                .email(request.getEmail())
                .passport(request.getPassport())
                .userRole(request.getUserRole())
                .build();
        /*
         * Depending on the userRole we'll save that user in a different rep.
         */
        if (Role.USER_CIVIL == request.getUserRole()) {
            CivilUser newUser = new CivilUser(userTemplate);
            civilUserRepository.save(newUser);

            userRouterRepository.save(
                    new UserRouter(newUser.getUserId(), newUser.getEmail(), newUser.getUserRole())
            );
            System.out.println("added a new user to CIVIL");
        }
        if (Role.USER_VOLUNTEER == request.getUserRole()) {
            VolunteerUser newUser = new VolunteerUser(userTemplate);
            volunteerUserRepository.save(newUser);

            userRouterRepository.save(
                    new UserRouter(newUser.getUserId(), newUser.getEmail(), newUser.getUserRole())
            );
            System.out.println("added a new user to VOLUNTEER");
        }
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
        User fuckUser = null;
        if (civilUserRepository.findByEmail(request.getEmail()).isPresent()) {
            fuckUser = civilUserRepository.findByEmail(request.getEmail()).get();
        }
        else if (volunteerUserRepository.findByEmail(request.getEmail()).isPresent()) {
            fuckUser = volunteerUserRepository.findByEmail(request.getEmail()).get();
        }
        else {
            throw new UsernameNotFoundException("FUCK MEEEEEE");
        }

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        fuckUser.getUserId(),
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

        if (user == null) {
            throw new UsernameNotFoundException("NOT FOUND!!!");
        }
        else {
            var jwtToken = jwtService.generateToken(user);
            return AuthenticationResponse.builder()
                    .token(jwtToken)
                    .build();
        }
    }
}
