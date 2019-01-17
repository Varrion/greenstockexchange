package mk.ukim.finki.emt.greenstockexchange.web;

import mk.ukim.finki.emt.greenstockexchange.model.Exchange;
import mk.ukim.finki.emt.greenstockexchange.model.dto.ExchangeDto;
import mk.ukim.finki.emt.greenstockexchange.service.ExchangeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest/exchange")
public class ExchangeController {

    public final ExchangeService exchangeService;

    public ExchangeController(ExchangeService exchangeService) {
        this.exchangeService = exchangeService;
    }

    @GetMapping()
    public List<Exchange> getExchanges() {
        return exchangeService.getExchanges();
    }

    @GetMapping("/{id}")
    public Exchange getExchange(@PathVariable Long id) {
        return exchangeService.getExchange(id);
    }

    @DeleteMapping("/{id}")
    public void deleteExchange(@PathVariable Long id) {
        exchangeService.removeExchange(id);
    }

    @PutMapping("/{id}/edit")
    public Exchange editExchange(@PathVariable Long id, @RequestBody ExchangeDto exchangeDto) {
        return exchangeService.editExchange(exchangeDto, id);
    }

    @PostMapping("/add")
    public Exchange addExchange(@RequestBody ExchangeDto exchangeDto) {
        return exchangeService.addExchange(exchangeDto);
    }


}
