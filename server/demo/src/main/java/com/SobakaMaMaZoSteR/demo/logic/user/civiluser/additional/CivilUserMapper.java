package com.SobakaMaMaZoSteR.demo.logic.user.civiluser.additional;

import com.SobakaMaMaZoSteR.demo.logic.user.civiluser.CivilUser;

public class CivilUserMapper {

    public static CivilUser parseDtoToCivilUser(CivilUserDto civilUserDto) {
        CivilUser civilUser = new CivilUser();

        civilUser.setUserId(civilUserDto.getUserId());
        civilUser.setUserName(civilUserDto.getUserName());
        civilUser.setEmail(civilUserDto.getEmail());
        civilUser.setPassword(civilUserDto.getPassword());
        civilUser.setPhoneNumber(civilUserDto.getPhoneNumber());
        civilUser.setUserRole(civilUserDto.getUserRole());

        return civilUser;
    }

}
