package mk.ukim.finki.emt.greenstockexchange;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class GreenstockexchangeApplication {

    public static void main(String[] args) {
        SpringApplication.run(GreenstockexchangeApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/greeting-javaconfig").allowedOrigins("http://localhost:3000");
            }
        };
    }

    /*Берза за продавање на земјоделски производи. Замјоделците ставаат продукт, со слика, географско потекло, локација,
    квалитет, и почетна цена. Ставаат датуми и колична која може да се купи на тој ден.
    Добиваат понуди за купување на продуктите.*/

}

