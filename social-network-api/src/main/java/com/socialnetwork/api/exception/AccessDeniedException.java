package com.socialnetwork.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.FORBIDDEN)
public class AccessDeniedException extends Exception {
  public AccessDeniedException() {
    super("Access denied");
  }
}