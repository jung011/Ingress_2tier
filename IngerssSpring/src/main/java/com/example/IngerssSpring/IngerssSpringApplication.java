package com.example.IngerssSpring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class IngerssSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(IngerssSpringApplication.class, args);
	}

}
