package com.SobakaMaMaZoSteR.demo.logic.user.volunteeruser;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VolunteerUserRepository extends MongoRepository<VolunteerUser, String> {
    Optional<VolunteerUser> findByEmail(String email);
    VolunteerUser findByUserId(String id);
}
