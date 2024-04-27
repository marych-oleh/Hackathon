package com.SobakaMaMaZoSteR.demo.logic.civilrequest.dto;


import com.SobakaMaMaZoSteR.demo.logic.civilrequest.entity.InfoVolunteer;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.entity.Location;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class CivilRequestDto {

    private String civilRequestId;
    private String civilUserId;
    private Date dateOfCreation;
    private Location location;
    private List<InfoVolunteer> infoVolunteers;
    private List<String> tags;
    private String description;
    private String status;



}
