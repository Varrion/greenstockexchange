package mk.ukim.finki.emt.greenstockexchange.repository;

import mk.ukim.finki.emt.greenstockexchange.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
