package com.SobakaMaMaZoSteR.demo.logic.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
//@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests()

                // these are made public cause Oleh said so😊 --------
                .requestMatchers("api/v1/civil-request/getAllBy").permitAll()
                .requestMatchers("api/v1/civil-request/getAllRequests/**").permitAll()
                // ---------------------------------------------------

                .requestMatchers("api/v1/home/**").permitAll()
                .requestMatchers("api/v1/auth/**").permitAll()

                .requestMatchers("api/v1/civilMapper/**")
                    .hasAnyAuthority("ROLE_USER_CIVIl", "USER_CIVIl", "\"USER_CIVIl\"", "\"ROLE_USER_CIVIl\"")
                .requestMatchers("api/v1/volunteerMapper/**")
                    .hasAnyAuthority("ROLE_USER_VOLUNTEER", "USER_VOLUNTEER", "\"USER_VOLUNTEER\"")

                .anyRequest().authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

}
