package com.SobakaMaMaZoSteR.demo.logic.user;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * This interface works with User class and is responsible for
 * its interactions with a database.
 */
public interface UserRepository extends MongoRepository<User, String> {



}
