package com.SobakaMaMaZoSteR.demo.logic.civilrequest.repository;

import com.SobakaMaMaZoSteR.demo.logic.civilrequest.entity.CivilRequest;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CivilRequestRepository extends MongoRepository<CivilRequest, String > {
    CivilRequest findByCivilRequestId(String id);
    CivilRequest deleteCivilRequestByCivilRequestId(String id);
    List<CivilRequest> findAllByTagsIn(List<String> tags);
    List<CivilRequest> findAllByLocation_LocationName(String locationName);

    List<CivilRequest> findAllByCivilUserId(String civilUserId);
}
