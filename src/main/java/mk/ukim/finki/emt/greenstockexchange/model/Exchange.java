package mk.ukim.finki.emt.greenstockexchange.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table (name = "stock_exchange")
public class Exchange {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
            @Column (name = "exchange_id")
    Double id;

    @Column (name = "start_date")
    Date startDate;

    @Column(name = "exchange_quantity")
    int quantity;


    public Double getId() {
        return id;
    }

    public void setId(Double id) {
        this.id = id;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
