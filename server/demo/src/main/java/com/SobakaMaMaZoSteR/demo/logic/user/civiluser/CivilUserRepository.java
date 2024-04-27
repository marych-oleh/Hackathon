package com.SobakaMaMaZoSteR.demo.logic.user.civiluser;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 *  Used for CivilUser and DB interactions
 */
@Repository
public interface CivilUserRepository extends MongoRepository<CivilUser, String> {
    // TODO: implement

    Optional<CivilUser> findByEmail(String s);
}
