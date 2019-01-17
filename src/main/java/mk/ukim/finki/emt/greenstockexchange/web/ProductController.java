package mk.ukim.finki.emt.greenstockexchange.web;

import mk.ukim.finki.emt.greenstockexchange.model.Product;
import mk.ukim.finki.emt.greenstockexchange.model.dto.ProductDto;
import mk.ukim.finki.emt.greenstockexchange.service.ProductService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/rest/product")
public class ProductController {

    public final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping()
    public List<Product> getAll() {
        return productService.getProducts();
    }

    @GetMapping("/{id}")
    public Product getProduct(@PathVariable Long id) {
        return productService.getProduct(id);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }

    @PutMapping("/{id}/edit")
    public Product editProduct(@PathVariable Long id, @RequestBody ProductDto productDto) {
        return productService.editProduct(productDto, id);
    }

    @PostMapping("/add")
    public Product addProduct(@RequestBody ProductDto productDto) {
        return productService.addProduct(productDto);
    }

    @PostMapping("/{id}/add/image")
    public void addImage(@PathVariable Long id, @RequestParam MultipartFile file) {
        productService.addImage(id, file);
    }


}
