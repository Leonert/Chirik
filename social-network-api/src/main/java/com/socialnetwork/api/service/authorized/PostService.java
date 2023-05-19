package com.socialnetwork.api.service.authorized;

import com.socialnetwork.api.exception.custom.NoPostWithSuchIdException;
import com.socialnetwork.api.exception.custom.NoUserWithSuchCredentialsException;
import com.socialnetwork.api.models.additional.View;
import com.socialnetwork.api.models.base.Post;
import com.socialnetwork.api.models.base.User;
import com.socialnetwork.api.repository.PostRepository;
import com.socialnetwork.api.repository.ViewRepository;
import com.socialnetwork.api.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostService {
  private final PostRepository postRepository;
  private final UserService userService;
  private final NotificationService notificationService;
  private final ModelMapper modelMapper;
  private final ViewRepository viewRepository;

  public Post getReferenceById(int id) throws NoPostWithSuchIdException {
    if (!postRepository.existsById(id)) {
      throw new NoPostWithSuchIdException();
    }
    return postRepository.getReferenceById(id);
  }

  public int save(Post post) {
    post.setCreatedDate(LocalDateTime.now());
    postRepository.save(post);
    notificationService.saveReplyRetweet(post);
    return post.getId();
  }

  public void edit(Post editedPost, Post originalPost) {
    modelMapper.getConfiguration().setPropertyCondition(Conditions.isNotNull());
    modelMapper.map(editedPost, originalPost);
    postRepository.save(originalPost);
  }

  public void delete(Post post) {
    postRepository.delete(post);
  }

  public List<Post> getPosts(int page, int postsNumber) {
    return postRepository.findAll(PageRequest.of(page, postsNumber, Sort.by("createdDate"))).toList();
  }

  public List<Post> getUnviewedPosts(int page, int postsNumber, String currentUserUsername)
          throws NoUserWithSuchCredentialsException {
    return postRepository.findAllPostsUnViewedByUser(userService.findByUsername(currentUserUsername).getId(),
        PageRequest.of(page, postsNumber, Sort.by("createdDate"))
    );
  }

  public List<Post> getReplies(int postId, int page, int usersForPage)
          throws NoPostWithSuchIdException {
    Post post = getReferenceById(postId);
    return postRepository.findAllByOriginalPostAndTextIsNotNull(
            post,
            PageRequest.of(page, usersForPage, Sort.by("createdDate")));
  }

  public List<User> getRetweets(int id, String currentUserUsername, int page, int usersForPage)
          throws NoUserWithSuchCredentialsException {
    User currentUser = userService.findByUsername(currentUserUsername);
    return postRepository.findUsersByRetweetedPost(id)
            .stream()
            .skip(page * usersForPage).limit(usersForPage)
            .peek(f -> f.setCurrUserFollower(userService.isFollowed(currentUser, f)))
            .toList();
  }

  public boolean existsById(Integer postId) {
    return postRepository.existsById(postId);
  }

  public int countPostRetweets(Post post) {
    return postRepository.countAllByOriginalPostAndTextNullAndImageNull(post);
  }

  public int countPostReplies(Post post) {
    return postRepository.countAllByOriginalPostAndTextNotNullAndImageNull(post);
  }

  public void saveView(User currentUser, int postId) {
    viewRepository.save(new View(currentUser, new Post(postId)));
  }

  public boolean isRetweetedByUser(int userId, int postId) {
    Optional<Post> post = postRepository.findByAuthorAndOriginalPost(new User(userId), new Post(postId));
    return post.isPresent() && post.get().getImage() == null && post.get().getText() == null;
  }
}
