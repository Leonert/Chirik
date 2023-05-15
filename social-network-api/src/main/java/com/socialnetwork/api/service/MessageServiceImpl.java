package com.socialnetwork.api.service;

import com.socialnetwork.api.dto.MessageDto;
import com.socialnetwork.api.models.base.Message;
import com.socialnetwork.api.models.base.User;
import com.socialnetwork.api.repository.MessageRepository;
import com.socialnetwork.api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MessageServiceImpl implements MessageService {
  private final MessageRepository messageRepository;
  private final ModelMapper modelMapper;
  private final UserRepository userRepository;

  @Override
  public List<MessageDto> getAllMessages() {
    List<Message> messages = messageRepository.findAll();
    return messages.stream()
            .map(message -> {
              MessageDto messageDto = modelMapper.map(message, MessageDto.class);
              messageDto.setId(message.getId());
              return messageDto;
            })
            .collect(Collectors.toList());
  }

  @Override
  public MessageDto getMessageById(int id) {
    Message message = messageRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Message not found with id: " + id));
    return modelMapper.map(message, MessageDto.class);
  }

  @Override
  public MessageDto updateMessage(MessageDto messageDto) {
    Message message = convertToMessage(messageDto);
    message = messageRepository.save(message);
    return convertToMessageDto(message);
  }

  @Override
  public void deleteMessage(int id) {
    messageRepository.deleteById(id);
  }

  @Override
  public List<MessageDto> searchMessages(String keyword) {
    List<Message> messages = messageRepository.findByMessageContainingIgnoreCase(keyword);
    return messages.stream()
            .map(message -> modelMapper.map(message, MessageDto.class))
            .collect(Collectors.toList());
  }

  public Message convertToMessage(MessageDto messageDto) {
    return modelMapper.map(messageDto, Message.class);
  }


  @Override
  public void markAsRead(int id) {
    Message message = messageRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Message not found with id: " + id));
    message.setRead(true);
    messageRepository.save(message);
  }
  @Override
  public MessageDto createMessage(MessageDto messageDto) {
    Message message = convertToMessage(messageDto);

    User recipient = userRepository.findById(messageDto.getRecipientId())
            .orElseThrow(() -> new EntityNotFoundException("Recipient not found with id: " + messageDto.getRecipientId()));
    User sender = userRepository.findById(messageDto.getSenderId())
            .orElseThrow(() -> new EntityNotFoundException("Sender not found with id: " + messageDto.getSenderId()));

    message.setRecipient(recipient);
    message.setSender(sender);
    message.setRead(false);
    message = messageRepository.save(message);
    return convertToMessageDto(message);
  }
  public MessageDto convertToMessageDto(Message message) {
    return modelMapper.map(message, MessageDto.class);
  }
}