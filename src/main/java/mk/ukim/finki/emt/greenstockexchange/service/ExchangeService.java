package mk.ukim.finki.emt.greenstockexchange.service;

import mk.ukim.finki.emt.greenstockexchange.model.Exchange;
import mk.ukim.finki.emt.greenstockexchange.model.dto.ExchangeDto;
import mk.ukim.finki.emt.greenstockexchange.repository.ExchangeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExchangeService {

    private final ExchangeRepository exchangeRepository;
    private final ProductService productService;

    public ExchangeService(ExchangeRepository exchangeRepository, ProductService productService) {
        this.exchangeRepository = exchangeRepository;
        this.productService = productService;
    }

    public Exchange getExchange(Long id) {
        return exchangeRepository.getOne(id);
    }

    public List<Exchange> getExchanges() {
        return exchangeRepository.findAll();
    }

    public void removeExchange(Long id) {
        exchangeRepository.deleteById(id);
    }

    public Exchange addExchange(ExchangeDto exchangeDto) {
        Exchange exchange = new Exchange();
        exchange.setStartDate(exchangeDto.startDate);
        exchange.setEndDate(exchangeDto.endDate);
        exchange.setQuantity(exchangeDto.quantity);
        exchange.setProduct(productService.getProduct(exchangeDto.productId));
        return exchangeRepository.save(exchange);
    }

    public Exchange editExchange(ExchangeDto exchangeDto, Long id) {
        Exchange exchange = exchangeRepository.getOne(id);
        exchange.setStartDate(exchangeDto.startDate);
        exchange.setEndDate(exchangeDto.endDate);
        exchange.setQuantity(exchangeDto.quantity);
        exchange.setProduct(productService.getProduct(exchangeDto.productId));
        return exchangeRepository.save(exchange);
    }
}
