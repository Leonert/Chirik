package com.socialnetwork.api.service;

import com.socialnetwork.api.models.base.Post;
import com.socialnetwork.api.models.base.User;
import com.socialnetwork.api.repository.PostRepository;
import com.socialnetwork.api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SearchService {
  private final PostRepository postRepository;
  private final UserRepository userRepository;


  public List<Post> searchPosts(String query, int page, int postsPerPage) {
    return postRepository.findPostsByTextContainingIgnoreCase
        (query, PageRequest.of(page, postsPerPage));
  }

  public List<User> searchUsers(String q, int page, int usersPerPage) {
    return userRepository
        .findByUsernameContainingIgnoreCaseOrNameContaining(q, q, PageRequest.of(page, usersPerPage)).toList();
  }
}
