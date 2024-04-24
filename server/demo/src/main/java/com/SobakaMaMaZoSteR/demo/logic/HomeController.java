package com.SobakaMaMaZoSteR.demo.logic;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/home")
public class HomeController {

    @GetMapping("/test_hello")
    public ResponseEntity<String> sayHelloWorld() {
        return ResponseEntity.ok("<h1 style=\"color: green;\"> Hello World </h1>");
    }

}
