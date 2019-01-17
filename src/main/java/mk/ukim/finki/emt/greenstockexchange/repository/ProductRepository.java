package mk.ukim.finki.emt.greenstockexchange.repository;

import mk.ukim.finki.emt.greenstockexchange.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository <Product, Long> {
}
