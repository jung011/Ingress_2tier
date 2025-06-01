package com.example.IngerssSpring.controller;

import com.example.IngerssSpring.client.clientTCC;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
//@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {})
@RequestMapping("/tcc")
public class controllerTdd {

    @PostMapping("/data")
    public String tddPostHello(@RequestBody Map<String, String> request) {
        String response = request.get("data");
        return response;
    }

    @GetMapping("/getdata")
    public String tccGetHello() {
        return "Tcc hello";
    }

  
}
