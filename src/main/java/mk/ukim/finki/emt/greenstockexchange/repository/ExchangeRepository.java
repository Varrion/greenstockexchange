package mk.ukim.finki.emt.greenstockexchange.repository;

import mk.ukim.finki.emt.greenstockexchange.model.Exchange;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExchangeRepository extends JpaRepository<Exchange, Long> {
}
