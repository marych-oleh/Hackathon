package com.SobakaMaMaZoSteR.demo.logic.user.user_router;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRouterRepository extends MongoRepository<UserRouter, String> {
    Optional<UserRouter> findByUserEmail(String email);
}
