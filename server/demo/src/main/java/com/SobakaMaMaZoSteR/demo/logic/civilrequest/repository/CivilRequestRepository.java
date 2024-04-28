package com.SobakaMaMaZoSteR.demo.logic.civilrequest.repository;

import com.SobakaMaMaZoSteR.demo.logic.civilrequest.entity.CivilRequest;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Repository interface for accessing CivilRequest entities in the MongoDB database.
 */
@Repository
public interface CivilRequestRepository extends MongoRepository<CivilRequest, String> {

    /**
     * Finds a CivilRequest by its ID.
     *
     * @param id The ID of the CivilRequest to find.
     * @return The CivilRequest if found, null otherwise.
     */
    CivilRequest findByCivilRequestId(String id);

    /**
     * Deletes a CivilRequest by its ID.
     *
     * @param id The ID of the CivilRequest to delete.
     * @return Optional containing the deleted CivilRequest if found, empty otherwise.
     */
    Optional<CivilRequest> deleteCivilRequestByCivilRequestId(String id);

    /**
     * Finds all CivilRequests by tags.
     *
     * @param tags List of tags to filter CivilRequests.
     * @return List of CivilRequests matching the provided tags.
     */
    List<CivilRequest> findAllByTagsIn(List<String> tags);

    /**
     * Finds all CivilRequests by location name.
     *
     * @param locationName The name of the location to filter CivilRequests.
     * @return List of CivilRequests located in the provided location.
     */
    List<CivilRequest> findAllByLocation_LocationName(String locationName);


    /**
     * Finds all CivilRequests associated with a CivilUser by CivilUser ID.
     *
     * @param civilUserId The ID of the CivilUser.
     * @return List of CivilRequests associated with the provided CivilUser.
     */
    List<CivilRequest> findAllByCivilUserId(String civilUserId);
}
