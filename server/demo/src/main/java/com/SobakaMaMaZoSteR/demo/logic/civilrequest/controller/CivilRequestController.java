package com.SobakaMaMaZoSteR.demo.logic.civilrequest.controller;

import com.SobakaMaMaZoSteR.demo.logic.civilrequest.controller.additional.CivilRequestWithVolunteer;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.entity.CivilRequest;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.dto.LocationAndNumberDto;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.dto.CivilRequestDto;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.entity.InfoVolunteer;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.mapper.CivilRequestMapper;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.service.CivilRequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("civil-request")
@RequiredArgsConstructor
public class CivilRequestController {

    @Autowired
    private CivilRequestService civilRequestService;

    @Autowired
    private CivilRequestMapper civilRequestMapper;

    @PostMapping("/add")
    public ResponseEntity<CivilRequestDto> add(@RequestBody CivilRequestDto civilRequestDto) {
        CivilRequest civilRequest = civilRequestMapper.toCivilRequest(civilRequestDto);
        CivilRequest civilRequestReceived = civilRequestService.addRequest(civilRequest);

        if (civilRequestReceived == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity<>(civilRequestMapper.toCivilRequestDto(civilRequestReceived), HttpStatus.OK);}

    @GetMapping("/get/{productId}")
    public ResponseEntity<CivilRequest> getById(@PathVariable String productId) {
        return new ResponseEntity<>(civilRequestService.findById(productId), HttpStatus.OK);
    }

    // Oleh asked to make publicly visible - 1
    @GetMapping("/getAllBy")
    public ResponseEntity<List<LocationAndNumberDto>> getAll(
            @RequestParam(name = "tag", defaultValue = "null", required = false) List<String> tags) {

        List<LocationAndNumberDto> listRequests = civilRequestService.getAll(tags);
        return new ResponseEntity<>(listRequests, HttpStatus.OK);
    }


    @GetMapping("/getCivilRequests/{civilUserId}")
    private ResponseEntity<List<CivilRequestWithVolunteer>> findAllCivilRequestByCivilUser(
            @PathVariable String civilUserId){
        return new ResponseEntity<>(civilRequestService.findAllCivilRequestByCivilUser(civilUserId), HttpStatus.OK);
    }

    // Oleh asked to make publicly visible - 2
    @GetMapping("/getAllRequests/{locationName}")
    public ResponseEntity<List<CivilRequestDto>> getAllRequests(@PathVariable String locationName) {
        List<CivilRequest> list = civilRequestService.getAllFullRequests(locationName);

        return new ResponseEntity<>(list.stream().map(civilRequestMapper::toCivilRequestDto).collect(Collectors.toList()), HttpStatus.OK);
    }

    @PostMapping("/addInfoVolunteer/{civilRequestId}")
    public ResponseEntity<CivilRequestDto> addInfoVolunteer(@PathVariable String civilRequestId, @RequestBody InfoVolunteer infoVolunteer) {
        Date currentDate = new Date();
        infoVolunteer.setDateOfAcceptation(currentDate);

        return new ResponseEntity<>(civilRequestMapper.toCivilRequestDto(civilRequestService.addInfoVolunteer(civilRequestId, infoVolunteer)), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{civilUserId}")
    public ResponseEntity<CivilRequest> delete(@PathVariable String civilUserId) {
        return new ResponseEntity<>(civilRequestService.deleteById(civilUserId), HttpStatus.OK);
    }
}
