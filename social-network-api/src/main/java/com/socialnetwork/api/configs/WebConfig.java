package com.socialnetwork.api.configs;

import com.socialnetwork.api.security.JwtTokenUtil;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {
  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**");
  }
  @Bean
  public JwtTokenUtil jwtTokenUtil() {
    // Create and return an instance of JwtTokenUtil
    return new JwtTokenUtil();
  }
}