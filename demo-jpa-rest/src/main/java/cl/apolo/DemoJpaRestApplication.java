package cl.apolo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan(basePackages="cl.apolo")
public class DemoJpaRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoJpaRestApplication.class, args);
		
	}

	
}
