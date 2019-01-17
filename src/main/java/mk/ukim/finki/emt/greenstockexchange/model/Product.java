package mk.ukim.finki.emt.greenstockexchange.model;

import javax.persistence.*;

@Entity
@Table (name="products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column (name="product_name")
    String name;

    @Column (name = "product_description")
    String description;

    @Column (name="product_origin")
    String origin;

    @Column (name = "product_location")
    String location;

    @Column (name="product_Starting_price")
    int startingPrice;

    @Column (name= "product_image")
    @Lob
    byte[] image;

    @ManyToOne (fetch = FetchType.EAGER)
    User user;

    @Column (name = "product_quaility")
    Quality quality;

    @Column (name="product_quantity")
    int quantity;

    @ManyToOne (fetch = FetchType.EAGER)
    Exchange exchange;

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Exchange getExchange() {
        return exchange;
    }

    public void setExchange(Exchange exchange) {
        this.exchange = exchange;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Quality getQuality() {
        return quality;
    }

    public void setQuality(Quality quality) {
        this.quality = quality;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getStartingPrice() {
        return startingPrice;
    }

    public void setStartingPrice(int startingPrice) {
        this.startingPrice = startingPrice;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public enum Quality { BAD, AVERAGE , GOOD, EXTRA_GOOD  }
}


/*Берза за продавање на земјоделски производи. Замјоделците ставаат продукт, со слика, географско потекло, локација,
    квалитет, и почетна цена. Ставаат датуми и колична која може да се купи на тој ден.
    Добиваат понуди за купување на продуктите.*/