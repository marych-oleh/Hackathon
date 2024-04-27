package com.SobakaMaMaZoSteR.demo.logic.civilrequest.dto;

import com.SobakaMaMaZoSteR.demo.logic.civilrequest.entity.Location;
import lombok.Data;

@Data
public class LocationAndNumberDto {
    private Location location;
    private Integer number;
}
