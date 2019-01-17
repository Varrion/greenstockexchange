package mk.ukim.finki.emt.greenstockexchange.service;

import mk.ukim.finki.emt.greenstockexchange.model.Offer;
import mk.ukim.finki.emt.greenstockexchange.model.dto.OfferDto;
import mk.ukim.finki.emt.greenstockexchange.repository.OfferRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OfferService {

    public final OfferRepository offerRepository;
    public final UserService userService;
    public final ExchangeService exchangeService;


    public OfferService(OfferRepository offerRepository, UserService userService, ExchangeService exchangeService) {
        this.offerRepository = offerRepository;
        this.userService = userService;
        this.exchangeService = exchangeService;
    }

    public Offer getOffer(Long id) {
        return offerRepository.getOne(id);
    }

    public List<Offer> getOffers() {
        return offerRepository.findAll();
    }

    public void deleteOffer(Long id) {
        offerRepository.deleteById(id);
    }

    public Offer addOffer(OfferDto offerDto) {
        Offer offer = new Offer();
        offer.setExchange(exchangeService.getExchange(offerDto.exchangeId));
        offer.setPrice(offerDto.price);
        offer.setUser(userService.getUser(offerDto.userId));

        return offerRepository.save(offer);
    }

    public Offer editOffer(OfferDto offerDto, Long id) {
        Offer offer = offerRepository.getOne(id);
        offer.setExchange(exchangeService.getExchange(offerDto.exchangeId));
        offer.setPrice(offerDto.price);
        offer.setUser(userService.getUser(offerDto.userId));

        return offerRepository.save(offer);
    }

}
