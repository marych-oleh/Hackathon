package com.SobakaMaMaZoSteR.demo.logic.user.civiluser;

import com.SobakaMaMaZoSteR.demo.logic.user.civiluser.additional.CivilUserDto;
import com.SobakaMaMaZoSteR.demo.logic.user.civiluser.additional.CivilUserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 *
 */
@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/v1/civilUser")
@PreAuthorize("hasAnyAuthority(\"USER_CIVIL\")")
public class CivilUserController {

    @Autowired
    private CivilUserRepository civilUserRepository;

    /**
     * @return a List of all users presented in DB
     */
    @GetMapping("/getAll")
    public ResponseEntity<List<CivilUser>> getAllCivilUsers() {
        return ResponseEntity.ok(civilUserRepository.findAll());
    }

    /**
     * @param id - search civilUser id
     * @return user that's been found
     */
    @GetMapping("/getById/{id}")
    public ResponseEntity<CivilUser> getCivilUserById(
            @PathVariable String id
    ) {
        CivilUser civilUser = civilUserRepository.findById(id).orElseThrow(
                () -> new UsernameNotFoundException("NO SUCH USER AAAAAAAAAAAAAAAAAA")
        );
        return ResponseEntity.ok(civilUser);
    }

    /**
     * @param email --
     * @return User with that email
     */
    @GetMapping("/getByEmail/{email}")
    public ResponseEntity<CivilUser> getCivilUserByEmail(
            @PathVariable String email
    ) {
        Optional<CivilUser> civilUser = civilUserRepository.findByEmail(email);
        return ResponseEntity.ok(civilUser.get());
    }
}
