package mk.ukim.finki.emt.greenstockexchange.repository;

import mk.ukim.finki.emt.greenstockexchange.model.Offer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OfferRepository extends JpaRepository<Offer,Long> {
}
