package com.SobakaMaMaZoSteR.demo.logic.user.civiluser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/civilUser")
public class CivilUserController {

    @Autowired
    private CivilUserRepository civilUserRepository;

    @GetMapping("/getById/{id}")
    public ResponseEntity<CivilUser> getCivilUserById(
            @PathVariable String id
    ) {
        return civilUserRepository
    }

}
