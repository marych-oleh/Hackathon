package com.SobakaMaMaZoSteR.demo.logic.civilrequest.service;

import com.SobakaMaMaZoSteR.demo.logic.civilrequest.controller.additional.CivilRequestWithVolunteer;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.controller.additional.dto.InfoVolunteerDto;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.controller.additional.dto.VolunteerUserDtoForRequest;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.dto.LocationAndNumberDto;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.controller.additional.LocationAndNumberMapper;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.entity.CivilRequest;

import com.SobakaMaMaZoSteR.demo.logic.civilrequest.entity.InfoVolunteer;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.entity.Location;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.mapper.CivilRequestMapper;
import com.SobakaMaMaZoSteR.demo.logic.civilrequest.repository.CivilRequestRepository;
import com.SobakaMaMaZoSteR.demo.logic.user.civiluser.CivilUser;
import com.SobakaMaMaZoSteR.demo.logic.user.civiluser.CivilUserRepository;
import com.SobakaMaMaZoSteR.demo.logic.user.volunteeruser.VolunteerUser;
import com.SobakaMaMaZoSteR.demo.logic.user.volunteeruser.VolunteerUserRepository;
import com.SobakaMaMaZoSteR.demo.logic.user.volunteeruser.additional.VolunteerUserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CivilRequestService {

    @Autowired
    private CivilRequestRepository civilRequestRepository;

    @Autowired
    private VolunteerUserRepository volunteerUserRepository;

    @Autowired
    private CivilUserRepository civilUserRepository;

    @Autowired
    private CivilRequestMapper civilRequestMapper;

    @Autowired
    private LocationAndNumberMapper locationAndNumberMapper;
    public CivilRequest addRequest(CivilRequest civilRequest) {

        List<CivilRequest> civilRequestsList = civilRequestRepository.findAllByCivilUserId(civilRequest.getCivilUserId());

        for (CivilRequest c: civilRequestsList){
            List<String> tagsInDb = c.getTags();
            if(isTagInTags(tagsInDb,civilRequest.getTags())){
                return null;
            }
        }

        CivilRequest civil = civilRequestRepository.save(civilRequest);

        Optional<CivilUser> civilUser = civilUserRepository.findById(civil.getCivilUserId());

        civilUser.get().getCreatedCivilRequest().add(civil);

        civilUserRepository.save(civilUser.get());

        return civil;
    }

    private boolean isTagInTags(List<String> tagsInBd, List<String> receivedTags){

        for (String tagInBd: tagsInBd){
            for (String tagReceived: receivedTags){
                if(tagInBd.equals(tagReceived))
                    return true;
            }
        }
        return false;
    }

    public CivilRequest findById(String civilRequestId) {
        return civilRequestRepository.findByCivilRequestId(civilRequestId);
    }

    public CivilRequest deleteById(String id) {
        return civilRequestRepository.deleteCivilRequestByCivilRequestId(id).orElseThrow(
                () -> new UsernameNotFoundException("User no Found")
        );
    }


    public List<CivilRequest> getAllFullRequests(String locationName) {
        return civilRequestRepository.findAllByLocation_LocationName(locationName);
    }

    /**
     *
     * @param civilUserId -
     * @return - List of requests
     */
    public List<CivilRequest> findAllRequestsByCivilUserId(String civilUserId) {
        Optional<CivilUser> civilUser = civilUserRepository.findById(civilUserId);
        if (civilUser.isPresent()) {
            return civilUser.get().getCreatedCivilRequest();
        }
        else {
            throw new UsernameNotFoundException(
                    "Such User doesn't exist ->\n\t>> findAllRequestsByCivilUserId"
            );
        }
    }

    // ----
    public List<CivilRequestWithVolunteer> findAllCivilRequestByCivilUser(String civilUserId){
        List<CivilRequest> lisCivilRequests = civilRequestRepository.findAllByCivilUserId(civilUserId);

        List<CivilRequestWithVolunteer> civilRequestWithVolunteers = new LinkedList<>();

        for(CivilRequest civilRequest: lisCivilRequests) {
            List<InfoVolunteer> infoVolunteerList = civilRequest.getInfoVolunteers();

            List<InfoVolunteerDto> infoVolunteerDtos = new LinkedList<>();

            for (InfoVolunteer infoVolunteer : infoVolunteerList){
                InfoVolunteerDto infoVolunteerDto = new InfoVolunteerDto();
                infoVolunteerDto.setComment(infoVolunteer.getComment());
                infoVolunteerDto.setDateOfAcceptation(infoVolunteer.getDateOfAcceptation());

                String id = infoVolunteer.getVolunteerUserId();
                VolunteerUser volunteerUser = volunteerUserRepository.findByUserId(id);

                VolunteerUserDtoForRequest volunteerUser1 = new VolunteerUserDtoForRequest();
                volunteerUser1.setUserId(volunteerUser.getUserId());
                volunteerUser1.setUserName(volunteerUser.getUsername());
                volunteerUser1.setEmail(volunteerUser.getEmail());
                volunteerUser1.setPhoneNumber(volunteerUser.getPhoneNumber());

                infoVolunteerDto.setVolunteerUser(volunteerUser1);
                infoVolunteerDtos.add(infoVolunteerDto);
            }

            civilRequestWithVolunteers.add(civilRequestMapper.toCivilRequestWithVolunteer(civilRequest, infoVolunteerDtos));
        }
        return civilRequestWithVolunteers;
    }

    public CivilRequest addInfoVolunteer(String civilRequestId, InfoVolunteer infoVolunteer){
        CivilRequest civilRequest = civilRequestRepository.findByCivilRequestId(civilRequestId);
        civilRequest.addInfoVolunteer(infoVolunteer);
        civilRequest.setStatus("TAKEN");

        VolunteerUser volunteerUser = volunteerUserRepository.findByUserId(infoVolunteer.getVolunteerUserId());
        volunteerUser.getCurrentRequestList().add(civilRequest);
        volunteerUserRepository.save(volunteerUser);
        return civilRequestRepository.save(civilRequest);
    }

    public List<LocationAndNumberDto> getAll(List<String> tags) {

        List<CivilRequest> list = civilRequestRepository.findAllByTagsIn(tags);

        return groupCivilRequests(list);
    }
    private List<LocationAndNumberDto> groupCivilRequests(List<CivilRequest> list) {

        Map<Location, Integer> group = new HashMap<>();

        for (CivilRequest civilRequest : list) {
            Location loc = civilRequest.getLocation();
            if (!isInMap(group, loc.getLocationName())) {
                group.put(civilRequest.getLocation(), 1);
            } else {
                group.put(loc, group.get(loc) + 1);
            }
        }


        return formCivilRequests(group);
    }

    private List<LocationAndNumberDto> formCivilRequests(Map<Location, Integer> group) {
        List<LocationAndNumberDto> list = new LinkedList<>();

        Set<Location> keys = group.keySet();

        for(Location loc: keys){
            list.add(locationAndNumberMapper.toLocationAndNumber(loc, group.get(loc)));
        }

        return list;
    }

    private boolean isInMap(Map<Location, Integer> group, String loc) {
        Set<Location> keys = group.keySet();
        Set<String> keysLocationMame = new HashSet<>();

        for (Location location: keys){
            keysLocationMame.add(location.getLocationName());
        }

        for (String currentLocation : keysLocationMame) {
            if (currentLocation.equals(loc)) {
                return true;
            }
        }
        return false;
    }




}
