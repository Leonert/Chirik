package com.socialnetwork.api.controller;

import com.socialnetwork.api.dto.MessageDto;
import com.socialnetwork.api.dto.UserDto;
import com.socialnetwork.api.models.base.Message;
import com.socialnetwork.api.models.base.User;
import com.socialnetwork.api.repository.MessageRepository;
import com.socialnetwork.api.repository.UserRepository;
import com.socialnetwork.api.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.lang.reflect.Type;
import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/messages")
public class MessagesController {
  private final MessageRepository messageRepository;
  private final MessageService messageService;
  private final ModelMapper modelMapper;
  private final UserRepository userRepository;

  @GetMapping("/{id}")
  public ResponseEntity<MessageDto> getMessageById(@PathVariable int id) {
    MessageDto messageDto = messageService.getMessageById(id);
    return ResponseEntity.ok(messageDto);
  }

  @GetMapping()
  public ResponseEntity<List<MessageDto>> getAllMessages() {
    List<Message> messages = messageRepository.findAll();
    List<MessageDto> messageDtos = messages.stream()
            .map(message -> convertToMessageDto(message))
            .collect(Collectors.toList());

    messageDtos.forEach(messageDto -> {
      System.out.println("ID: " + messageDto.getId());
      System.out.println("Message: " + messageDto.getMessage());
    });

    return ResponseEntity.ok(messageDtos);
  }

  @PostMapping("/create")
  public ResponseEntity<MessageDto> createMessage(@RequestBody MessageDto messageDto) {
    MessageDto createdMessageDto = messageService.createMessage(messageDto);
    createdMessageDto.setRecipientId(messageDto.getRecipientId());
    createdMessageDto.setSenderId(messageDto.getSenderId());
    return ResponseEntity.created(URI.create("/api/messages/" + createdMessageDto.getId())).body(createdMessageDto);
  }

  @PutMapping("/{id}")
  public ResponseEntity<MessageDto> updateMessage(@PathVariable int id, @RequestBody MessageDto messageDto) {
    messageDto.setId(Integer.parseInt(String.valueOf(id)));
    MessageDto updatedMessageDto = messageService.updateMessage(messageDto);
    return ResponseEntity.ok(updatedMessageDto);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteMessage(@PathVariable int id) {
    messageRepository.deleteById(id);
    return ResponseEntity.noContent().build();
  }

  @GetMapping("/search")
  public ResponseEntity<List<MessageDto>> searchMessages(@RequestParam("keyword") String keyword) {
    List<MessageDto> messages = messageService.searchMessages(keyword);
    return ResponseEntity.ok(messages);
  }

  @PutMapping("/{id}/read")
  public ResponseEntity<Void> markMessageAsRead(@PathVariable int id) {
    messageService.markAsRead(id);
    return ResponseEntity.noContent().build();
  }

  @GetMapping("/users")
  public ResponseEntity<List<UserDto.Response.Listing>> getAllUsers() {
    List<User> users = userRepository.findAll();
    List<UserDto.Response.Listing> userDtos = users.stream()
            .map(user ->
                    modelMapper.map(user, UserDto.Response.Listing.class))
            .collect(Collectors.toList());

    return ResponseEntity.ok(userDtos);
  }

  private MessageDto convertToMessage(MessageDto messageDto) {
    return modelMapper.map((Object) messageDto, (Type) Message.class);
  }

  private MessageDto convertToMessageDto(Message message) {
    return modelMapper.map(message, MessageDto.class);
  }
}