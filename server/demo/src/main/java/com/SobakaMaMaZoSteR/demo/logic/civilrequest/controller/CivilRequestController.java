package com.SobakaMaMaZoSteR.demo.logic.civilrequest.controller;

import com.SobakaMaMaZoSteR.demo.logic.civilrequest.entity.CivilRequest;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.dto.LocationAndNumberDto;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.dto.CivilRequestDto;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.entity.InfoVolunteer;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.mapper.CivilRequestMapper;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.service.CivilRequestService;
import com.SobakaMaMaZoSteR.demo.logic.config.UrlConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
/**
 * Controller class responsible for handling HTTP requests related to civil requests.
 */
@RestController
@CrossOrigin(origins = UrlConfig.ORIGIN_URL)
@RequestMapping(UrlConfig.MAPPING_PREFIX + "/civil-request")
@RequiredArgsConstructor
public class CivilRequestController {

    @Autowired
    private CivilRequestService civilRequestService;

    @Autowired
    private CivilRequestMapper civilRequestMapper;

    /**
     * Adds a new civil request.
     *
     * @param civilRequestDto The DTO representing the civil request to be added.
     * @return ResponseEntity containing the added civil request DTO if successful, or HttpStatus.NOT_ACCEPTABLE if unsuccessful.
     */
    @PostMapping("/add")
    public ResponseEntity<CivilRequestDto> add(@RequestBody CivilRequestDto civilRequestDto) {
        CivilRequest civilRequest = civilRequestMapper.toCivilRequest(civilRequestDto);
        CivilRequest civilRequestReceived = civilRequestService.addRequest(civilRequest);

        if (civilRequestReceived == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity<>(civilRequestMapper.toCivilRequestDto(civilRequestReceived), HttpStatus.OK);}

    /**
     * Retrieves a civil request by its ID.
     *
     * @param productId The ID of the civil request to retrieve.
     * @return ResponseEntity containing the retrieved civil request if found, or HttpStatus.NOT_FOUND if not found.
     */
    @GetMapping("/get/{productId}")
    public ResponseEntity<CivilRequest> getById(@PathVariable String productId) {
        return new ResponseEntity<>(civilRequestService.findById(productId), HttpStatus.OK);
    }

    // Oleh asked to make publicly visible - 1
    /**
     * Retrieves all civil requests filtered by tags.
     *
     * @param tags List of tags to filter the civil requests.
     * @return ResponseEntity containing a list of LocationAndNumberDto representing the filtered civil requests.
     */
    @GetMapping("/getAllBy")
    public ResponseEntity<List<LocationAndNumberDto>> getAll(
            @RequestParam(name = "tag", defaultValue = "null", required = false) List<String> tags) {

        List<LocationAndNumberDto> listRequests = civilRequestService.getAll(tags);
        return new ResponseEntity<>(listRequests, HttpStatus.OK);
    }


    /*@GetMapping("/getCivilRequests/{civilUserId}")
    private ResponseEntity<List<CivilRequestWithVolunteer>> findAllCivilRequestByCivilUser(
            @PathVariable String civilUserId){
        return new ResponseEntity<>(
                civilRequestService.findAllCivilRequestByCivilUser(civilUserId),
                HttpStatus.OK
        );
    }*/

    /**
     * Retrieves all civil requests associated with a civil user.
     *
     * @param civilUserId The ID of the civil user.
     * @return ResponseEntity containing a list of CivilRequest representing the civil requests associated with the user.
     */
    @GetMapping("/getCivilRequests/{civilUserId}")
    private ResponseEntity<List<CivilRequest>> findAllCivilRequestByCivilUser(
            @PathVariable String civilUserId){
        return new ResponseEntity<>(
                civilRequestService.findAllRequestsByCivilUserId(civilUserId),
                HttpStatus.OK
        );
    }

    // Oleh asked to make publicly visible - 2
    /**
     * Retrieves all full civil requests in a specific location.
     *
     * @param locationName The name of the location.
     * @return ResponseEntity containing a list of CivilRequestDto representing the full civil requests in the location.
     */
    @GetMapping("/getAllRequests/{locationName}")
    public ResponseEntity<List<CivilRequestDto>> getAllRequests(@PathVariable String locationName) {
        List<CivilRequest> list = civilRequestService.getAllFullRequests(locationName);

        return new ResponseEntity<>(list.stream().map(civilRequestMapper::toCivilRequestDto).collect(Collectors.toList()), HttpStatus.OK);
    }

    /**
     * Adds volunteer information to a civil request.
     *
     * @param civilRequestId The ID of the civil request.
     * @param infoVolunteer The information of the volunteer.
     * @return ResponseEntity containing the updated civil request DTO if successful.
     */
    @PostMapping("/addInfoVolunteer/{civilRequestId}")
    public ResponseEntity<CivilRequestDto> addInfoVolunteer(@PathVariable String civilRequestId, @RequestBody InfoVolunteer infoVolunteer) {
        Date currentDate = new Date();
        infoVolunteer.setDateOfAcceptation(currentDate);

        return new ResponseEntity<>(civilRequestMapper.toCivilRequestDto(civilRequestService.addInfoVolunteer(civilRequestId, infoVolunteer)), HttpStatus.OK);
    }

    /**
     * Deletes a civil request by its ID.
     *
     * @param civilRequestId The ID of the civil request to delete.
     * @return ResponseEntity containing the deleted civil request if successful.
     */
    @DeleteMapping("/delete/{civilRequestId}")
    public ResponseEntity<CivilRequest> delete(@PathVariable String civilRequestId) {
        return new ResponseEntity<>(civilRequestService.deleteById(civilRequestId), HttpStatus.OK);
    }
}
