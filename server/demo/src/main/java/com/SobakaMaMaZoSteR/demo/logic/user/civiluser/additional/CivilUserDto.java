package com.SobakaMaMaZoSteR.demo.logic.user.civiluser.additional;

import com.SobakaMaMaZoSteR.demo.logic.user.Role;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

@Getter
@Setter
@Builder
public class CivilUserDto {
    @Id
    private String userId;
    private String userName;
    private String email;
    private String password;
    private String phoneNumber;

    // Enumeration that decides what child class will the User upcast
    private Role userRole;


}
