package mk.ukim.finki.emt.greenstockexchange.web;

import mk.ukim.finki.emt.greenstockexchange.model.Offer;
import mk.ukim.finki.emt.greenstockexchange.model.dto.OfferDto;
import mk.ukim.finki.emt.greenstockexchange.service.OfferService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest/offer")
public class OfferController {

    public final OfferService offerService;

    public OfferController(OfferService offerService) {
        this.offerService = offerService;
    }

    @GetMapping()
    public List<Offer> getOffers() {
        return offerService.getOffers();
    }

    @GetMapping("/{id}")
    public Offer getOffer(@PathVariable Long id) {
        return offerService.getOffer(id);
    }

    @DeleteMapping("/{id}")
    public void deleteOffer(@PathVariable Long id) {
        offerService.deleteOffer(id);
    }

    @PutMapping("/{id}/edit")
    public Offer editOffer(@PathVariable Long id, @RequestBody OfferDto offerDto) {
        return offerService.editOffer(offerDto, id);
    }

    @PostMapping("/add")
    public Offer addOffer(@RequestBody OfferDto offerDto) {
        return offerService.addOffer(offerDto);
    }
}
