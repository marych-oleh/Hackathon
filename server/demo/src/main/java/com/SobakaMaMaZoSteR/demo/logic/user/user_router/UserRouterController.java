package com.SobakaMaMaZoSteR.demo.logic.user.user_router;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/v1/userRouter")
public class UserRouterController {

    @Autowired
    private UserRouterRepository userRouterRepository;

    @GetMapping("/getAll")
    public ResponseEntity<List<UserRouter>> getAll() {
        return ResponseEntity.ok(userRouterRepository.findAll());
    }

}
