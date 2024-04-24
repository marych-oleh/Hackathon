package com.SobakaMaMaZoSteR.demo.logic.civilrequest;


import com.SobakaMaMaZoSteR.demo.logic.user.volunteer.VolunteerUser;
import com.fasterxml.jackson.annotation.JsonInclude;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Document(collection = "civil_request")
@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CivilRequest {

    @Id
    private String civilRequestId;
    private String civilUserId;
    private Date dateOfCreation;
    private String location;
    private Map<VolunteerUser, Date> volunteerUserList;
    private List<String> tagList;
    private String description;
    private String status;

}
