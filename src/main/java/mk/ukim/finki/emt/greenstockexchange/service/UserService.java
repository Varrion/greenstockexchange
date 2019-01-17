package mk.ukim.finki.emt.greenstockexchange.service;

import mk.ukim.finki.emt.greenstockexchange.model.User;
import mk.ukim.finki.emt.greenstockexchange.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUser(Long id) {
        return userRepository.getOne(id);
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User addUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public User editUser(User newUser, Long id) {

        User user = userRepository.getOne(id);
        user.setAddress(newUser.getAddress());
        user.setDescription(newUser.getDescription());
        user.setLocation(newUser.getLocation());
        user.setMobile(newUser.getMobile());
        user.setName(newUser.getName());
        user.setPassword(newUser.getPassword());
        user.setPicture(newUser.getPicture());

        return userRepository.save(user);

    }


    public void addImage(Long id, MultipartFile image) {
        User user = userRepository.getOne(id);
        try {
            user.setPicture(image.getBytes());
            userRepository.save(user);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
