package com.SobakaMaMaZoSteR.demo.logic.civilrequest.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import java.util.Date;
import java.util.List;

@Document(collection = "civil_request")
@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CivilRequest {

    @Id
    private String civilRequestId;
    private String civilUserId;
    private Date dateOfCreation;
    private Location location;
    private List<InfoVolunteer> infoVolunteers;
    private List<String> tags;
    private String description;
    private String status;
    public void addInfoVolunteer(InfoVolunteer infoVolunteer){
        infoVolunteers.add(infoVolunteer);
    }

}
