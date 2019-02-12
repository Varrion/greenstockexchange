package mk.ukim.finki.emt.greenstockexchange.web;

import mk.ukim.finki.emt.greenstockexchange.model.User;
import mk.ukim.finki.emt.greenstockexchange.service.UserService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/rest/user")
public class UserController {

    public final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping()
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

    @PutMapping("/{id}/edit")
    public User editUser(@PathVariable Long id, @RequestBody User user) {
        return userService.editUser(user, id);
    }

    @PostMapping("/add")
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @PostMapping("/{id}/add/image")
    public void addImage(@PathVariable Long id, @RequestParam MultipartFile file) {
        userService.addImage(id, file);
    }
}
