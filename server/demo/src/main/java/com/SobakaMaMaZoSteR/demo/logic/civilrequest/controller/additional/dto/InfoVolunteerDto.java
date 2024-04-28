package com.SobakaMaMaZoSteR.demo.logic.civilrequest.controller.additional.dto;

import com.SobakaMaMaZoSteR.demo.logic.user.volunteeruser.VolunteerUser;
import lombok.Data;

import java.util.Date;

@Data
public class InfoVolunteerDto {
    private VolunteerUserDtoForRequest volunteerUser;
    private String comment;
    private Date dateOfAcceptation;
}
