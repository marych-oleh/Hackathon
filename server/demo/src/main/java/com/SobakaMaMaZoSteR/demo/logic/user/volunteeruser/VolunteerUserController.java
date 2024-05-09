package com.SobakaMaMaZoSteR.demo.logic.user.volunteeruser;

import com.SobakaMaMaZoSteR.demo.logic.config.UrlConfig;
import com.SobakaMaMaZoSteR.demo.logic.user.volunteeruser.additional.VolunteerUserDto;
import com.SobakaMaMaZoSteR.demo.logic.user.volunteeruser.additional.VolunteerUserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = UrlConfig.ORIGIN_URL)
@RequestMapping(UrlConfig.MAPPING_PREFIX + "/volunteerMapper")
public class VolunteerUserController {
    @Autowired
    private VolunteerUserRepository volunteerUserRepository;

    /**
     * @return a List of all users presented in DB
     */
    @GetMapping("/getAll")
    public ResponseEntity<List<VolunteerUser>> getAllVolunteerUsers() {
        return ResponseEntity.ok(volunteerUserRepository.findAll());
    }

    /**
     * @param id - search civilUser id
     * @return user that's been found
     */
    @GetMapping("/getById/{id}")
    public ResponseEntity<VolunteerUser> getVolunteerUserById(
            @PathVariable String id
    ) {
        Optional<VolunteerUser> volunteerUser = volunteerUserRepository.findById(id);
        return ResponseEntity.ok(volunteerUser.get());
    }
    @PostMapping("/add")
    public ResponseEntity<VolunteerUser> addCivilUser(
            @RequestBody VolunteerUserDto userTemplate
    ) {
        VolunteerUser volunteerUser = VolunteerUserMapper.parseDtoToVolunteerUser(userTemplate);
        return ResponseEntity.ok(volunteerUser);
    }

    /**
     * @param email --
     * @return User with that email
     */
    @GetMapping("/getByEmail/{email}")
    public ResponseEntity<VolunteerUser> getVolunteerUserByEmail(
            @PathVariable String email
    ) {
        Optional<VolunteerUser> volunteerUser = volunteerUserRepository.findByEmail(email);
        return ResponseEntity.ok(volunteerUser.get());
    }

}
