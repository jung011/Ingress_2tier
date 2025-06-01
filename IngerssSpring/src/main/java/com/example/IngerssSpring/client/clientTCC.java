package com.example.IngerssSpring.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "clusterspring")
public interface clientTCC {
    @GetMapping(value = "/tdd/getdata")
    String tccGetHello();
}
