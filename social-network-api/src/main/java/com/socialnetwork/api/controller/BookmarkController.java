package com.socialnetwork.api.controller;

import com.socialnetwork.api.dto.NotificationDto;
import com.socialnetwork.api.dto.PostDtoInterface;
import com.socialnetwork.api.exception.custom.NoPostWithSuchIdException;
import com.socialnetwork.api.exception.custom.NoUserWithSuchCredentialsException;
import com.socialnetwork.api.mapper.authorized.NotificationMapper;
import com.socialnetwork.api.mapper.authorized.PostMapper;
import com.socialnetwork.api.models.additional.Bookmark;
import com.socialnetwork.api.models.base.Post;
import com.socialnetwork.api.service.authorized.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

import static com.socialnetwork.api.util.Constants.Auth.USERNAME_ATTRIBUTE;

@RestController
@RequestMapping("/api/bookmarks")
@RequiredArgsConstructor
public class BookmarkController {
  private final UserService userService;
  private final PostMapper postMapper;

  @GetMapping()
  public ResponseEntity<List<PostDtoInterface>> getUserNotifications(@RequestAttribute(USERNAME_ATTRIBUTE) String username)
      throws NoUserWithSuchCredentialsException, NoPostWithSuchIdException {
    List<PostDtoInterface> outcome = new ArrayList<>();
    for (Post post: userService.findByUsername(username).getBookmarkedPosts()
        .stream().map(Bookmark::getBookmarkedPost).toList()) {
      outcome.add(postMapper.convertToPostDtoDefault(post, username));
    }
    return ResponseEntity.ok().body(outcome);
  }
}