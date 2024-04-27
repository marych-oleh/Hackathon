package com.SobakaMaMaZoSteR.demo.logic.config;

import com.SobakaMaMaZoSteR.demo.logic.user.Role;
import com.SobakaMaMaZoSteR.demo.logic.user.civiluser.CivilUserRepository;
import com.SobakaMaMaZoSteR.demo.logic.user.user_router.UserRouter;
import com.SobakaMaMaZoSteR.demo.logic.user.user_router.UserRouterRepository;
import com.SobakaMaMaZoSteR.demo.logic.user.volunteeruser.VolunteerUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class ApplicationConfig {
    private final UserRouterRepository userRouterRepository;
    private final CivilUserRepository civilUserRepository;
    private final VolunteerUserRepository volunteerUserRepository;

    @Autowired
    public ApplicationConfig(UserRouterRepository userRouterRepository,
                             CivilUserRepository civilUserRepository,
                             VolunteerUserRepository volunteerUserRepository) {
        this.userRouterRepository = userRouterRepository;
        this.civilUserRepository = civilUserRepository;
        this.volunteerUserRepository = volunteerUserRepository;
    }

    /**
     * The Method searches for the role in the UserRouter Schema
     * than depending on the Role looks in the specific DB;
     * @return - UserDetailService
     */
    @Bean
    public UserDetailsService userDetailsService() {
        return userEmail -> {
            UserRouter userRole = userRouterRepository.findByUserEmail(userEmail)
                    .orElseThrow(() -> new UsernameNotFoundException(
                            "No Such Info in the UserRouter Schema"
                    ));
            if (Role.USER_CIVIL == userRole.getRole()) {
                return civilUserRepository.findByEmail(userEmail)
                        .orElseThrow(() -> new UsernameNotFoundException(
                                "User Not Found!"
                        ));
            }
            else if (Role.USER_VOLUNTEER == userRole.getRole()) {
                return volunteerUserRepository.findByEmail(userEmail)
                        .orElseThrow(() -> new UsernameNotFoundException(
                                "User Not Found!"
                        ));
            }
            else {
                return null;
            }
        };
    }
    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService());
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
