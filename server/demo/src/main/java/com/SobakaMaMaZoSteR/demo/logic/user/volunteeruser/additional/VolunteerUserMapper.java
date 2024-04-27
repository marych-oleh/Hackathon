package com.SobakaMaMaZoSteR.demo.logic.user.volunteeruser.additional;

import com.SobakaMaMaZoSteR.demo.logic.user.volunteeruser.VolunteerUser;

import java.util.ArrayList;

public class VolunteerUserMapper {
    public static final Integer BASIC_TRUST_RATE = 0;

    public static VolunteerUser parseDtoToVolunteerUser(VolunteerUserDto volunteerUserDto) {
        VolunteerUser volunteerUser = new VolunteerUser();

        volunteerUser.setUserId(volunteerUserDto.getUserId());
        volunteerUser.setUserName(volunteerUserDto.getUserName());
        volunteerUser.setEmail(volunteerUserDto.getEmail());
        volunteerUser.setPhoneNumber(volunteerUser.getPhoneNumber());
        volunteerUser.setPassword(volunteerUserDto.getPassword());
        volunteerUser.setUserRole(volunteerUser.getUserRole());

        // additional
        volunteerUser.setPassport(volunteerUserDto.getPassport());
        volunteerUser.setTrustRate(BASIC_TRUST_RATE);
        volunteerUser.setCurrentRequestList(new ArrayList<>());

        return volunteerUser;
    }

}
