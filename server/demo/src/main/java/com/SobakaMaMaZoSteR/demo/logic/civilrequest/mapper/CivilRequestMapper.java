package com.SobakaMaMaZoSteR.demo.logic.civilrequest.mapper;

import com.SobakaMaMaZoSteR.demo.logic.civilrequest.controller.additional.CivilRequestWithVolunteer;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.controller.additional.dto.InfoVolunteerDto;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.entity.CivilRequest;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.dto.CivilRequestDto;
import com.SobakaMaMaZoSteR.demo.logic.user.volunteeruser.VolunteerUser;
import com.SobakaMaMaZoSteR.demo.logic.user.volunteeruser.additional.VolunteerUserDto;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class CivilRequestMapper {
    public CivilRequestDto toCivilRequestDto(CivilRequest civilRequest) {
        CivilRequestDto civilRequestDto = new CivilRequestDto();

        civilRequestDto.setCivilRequestId(civilRequest.getCivilRequestId());
        civilRequestDto.setCivilUserId(civilRequest.getCivilUserId());
        civilRequestDto.setDateOfCreation(civilRequest.getDateOfCreation());
        civilRequestDto.setLocation(civilRequest.getLocation());
        civilRequestDto.setInfoVolunteers(civilRequest.getInfoVolunteers());
        civilRequestDto.setTags(civilRequest.getTags());
        civilRequestDto.setDescription(civilRequest.getDescription());
        civilRequestDto.setStatus(civilRequest.getStatus());
        return civilRequestDto;
    }

    public CivilRequest toCivilRequest(CivilRequestDto civilRequestDto) {
        CivilRequest civilRequest = new CivilRequest();

        civilRequest.setCivilRequestId(civilRequestDto.getCivilRequestId());
        civilRequest.setCivilUserId(civilRequestDto.getCivilUserId());

        civilRequest.setLocation(civilRequestDto.getLocation());

        civilRequest.setTags(civilRequestDto.getTags());
        civilRequest.setDescription(civilRequestDto.getDescription());


        Date currentDate = new Date();

        civilRequest.setDateOfCreation(currentDate);
        civilRequest.setInfoVolunteers(new ArrayList<>());
        civilRequest.setStatus("NOT_TAKEN");
        return civilRequest;
    }

    public CivilRequestWithVolunteer toCivilRequestWithVolunteer(CivilRequest civilRequest, List<InfoVolunteerDto> infoVolunteerDtos){
        CivilRequestWithVolunteer civilRequestWithVolunteer = new CivilRequestWithVolunteer();

        civilRequestWithVolunteer.setCivilRequestId(civilRequest.getCivilRequestId());
        civilRequestWithVolunteer.setCivilUserId(civilRequest.getCivilUserId());
        civilRequestWithVolunteer.setDateOfCreation(civilRequest.getDateOfCreation());
        civilRequestWithVolunteer.setLocation(civilRequest.getLocation());
        civilRequestWithVolunteer.setTags(civilRequest.getTags());
        civilRequestWithVolunteer.setDescription(civilRequest.getDescription());
        civilRequestWithVolunteer.setStatus(civilRequest.getStatus());
        civilRequestWithVolunteer.setInfoVolunteers(infoVolunteerDtos);

        return civilRequestWithVolunteer;
    }
}
