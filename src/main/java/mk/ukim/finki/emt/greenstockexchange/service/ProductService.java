package mk.ukim.finki.emt.greenstockexchange.service;

import mk.ukim.finki.emt.greenstockexchange.model.Product;
import mk.ukim.finki.emt.greenstockexchange.model.dto.ProductDto;
import mk.ukim.finki.emt.greenstockexchange.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;



@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final UserService userService;




    public ProductService(ProductRepository productRepository, UserService userService) {
        this.productRepository = productRepository;
        this.userService = userService;
    }

    public Product getProduct (Long id){
        return productRepository.getOne(id);
    }

    public List<Product> getProducts(){
        return productRepository.findAll();
    }

    public void deleteProduct(Long id){
        productRepository.deleteById(id);
    }


    public Product addProduct(ProductDto productDto) {
        Product product = new Product();
        product.setName(productDto.name);
        product.setDescription(productDto.description);
        product.setOrigin(productDto.origin);
        product.setLocation(productDto.location);
        product.setImage(productDto.image);
        product.setQuality(productDto.quality);
        product.setUser(userService.getUser(productDto.userId));
        return productRepository.save(product);
    }

    public Product editProduct (ProductDto productDto, long id){
        Product product = productRepository.getOne(id);
        product.setName(productDto.name);
        product.setDescription(productDto.description);
        product.setOrigin(productDto.origin);
        product.setLocation(productDto.location);
        product.setImage(productDto.image);
        product.setQuality(productDto.quality);
        product.setUser(userService.getUser(productDto.userId));
        return productRepository.save(product);
    }

    public void addImage(long id, MultipartFile image) {
        Product product = productRepository.getOne(id);
        try {
            product.setImage(image.getBytes());
            productRepository.save(product);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
