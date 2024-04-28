package com.SobakaMaMaZoSteR.demo.logic.user;


import com.fasterxml.jackson.databind.annotation.EnumNaming;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

/**
 * This class is responsible for user interactions
 * and is used in auth.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User implements UserDetails {
    @Id
    private String userId;
    private String userName;
    private String email;
    private String password;
    private String phoneNumber;

    // additional field for passport
    private String passport;

    // Enumeration that decides what child class will the User upcast
    private Role userRole;

    public User(User other) {
        this.userId = other.getUserId();
        this.userName = other.getUsername();
        this.email = other.getEmail();
        this.password = other.getPassword();
        this.phoneNumber = other.getPhoneNumber();
        this.passport = other.getPassport();
        this.userRole = other.getUserRole();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(userRole.name()));
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.userId;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
