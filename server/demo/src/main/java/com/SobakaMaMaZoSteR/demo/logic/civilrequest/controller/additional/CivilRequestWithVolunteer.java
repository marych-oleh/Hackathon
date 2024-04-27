package com.SobakaMaMaZoSteR.demo.logic.civilrequest.controller.additional;

import com.SobakaMaMaZoSteR.demo.logic.civilrequest.controller.additional.dto.InfoVolunteerDto;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.entity.InfoVolunteer;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.entity.Location;
import lombok.Data;

import java.util.Date;
import java.util.List;
@Data
public class CivilRequestWithVolunteer {
    private String civilRequestId;
    private String civilUserId;
    private Date dateOfCreation;
    private Location location;
    private List<InfoVolunteerDto> infoVolunteers;
    private List<String> tags;
    private String description;
    private String status;
}
