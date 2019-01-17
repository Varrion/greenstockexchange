package mk.ukim.finki.emt.greenstockexchange.model.dto;

import mk.ukim.finki.emt.greenstockexchange.model.Product;

public class ProductDto {
    public String name;
    public String description;
    public String origin;
    public String location;
    public byte[] image;
    public Product.Quality quality;
    public long userId;
}
