package com.example.IngerssSpring.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
//@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {})
@RequestMapping("/api")
public class controllerTest {
    private static final Logger logger = LoggerFactory.getLogger(controllerTest.class);

    @PostMapping("/data")
    public String postHello(@RequestBody Map<String, String> request) {
        logger.info("POST 요청 받음: {}", request);
        String response = request.get("data");
        return response;
    }

    @GetMapping("/getdata")
    public String getHello() {
        logger.info("GET 요청 받음");
        return "hello";
    }
}
