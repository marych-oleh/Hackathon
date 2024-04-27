package com.SobakaMaMaZoSteR.demo.logic.user.volunteeruser.additional;

import com.SobakaMaMaZoSteR.demo.logic.user.Role;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

@Getter
@Setter
@Builder
public class VolunteerUserDto {
    @Id
    private String userId;
    private String userName;
    private String email;
    private String password;
    private String phoneNumber;

    // passport for volunteer
    private String passport;

    // Enumeration that decides what child class will the User upcast
    private Role userRole;
}
