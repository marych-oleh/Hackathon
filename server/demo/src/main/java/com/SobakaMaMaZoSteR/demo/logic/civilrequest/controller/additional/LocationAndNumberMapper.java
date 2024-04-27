package com.SobakaMaMaZoSteR.demo.logic.civilrequest.controller.additional;

import com.SobakaMaMaZoSteR.demo.logic.civilrequest.dto.LocationAndNumberDto;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.entity.Location;
import org.springframework.stereotype.Component;

@Component
public class LocationAndNumberMapper {

    public LocationAndNumberDto toLocationAndNumber(Location location, Integer num){
        LocationAndNumberDto locationAndNumberDto = new LocationAndNumberDto();
        locationAndNumberDto.setLocation(location);
        locationAndNumberDto.setNumber(num);

        return locationAndNumberDto;
    }
}
