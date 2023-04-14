package co.grandcircus.StocksAPI;

import org.springframework.http.HttpStatus;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin 
public class StockAPIController {

    @Autowired
    private StockService api;

    @Autowired
    private FavoriteRepository repo;

    @GetMapping("/stocks")
    public Stock[] readAll(){
        return api.getStocks();
    }
    
    @GetMapping("/stocks/yesterday")
    public Stock[] readAllY(){
        return api.getYesterday();
    }

    @GetMapping("/favorites")
    public List<Favorite> getAll() {
        return repo.findAll();    
    }
        
    @PostMapping("/favorites")
    @ResponseStatus(HttpStatus.CREATED)
    public Favorite create(@RequestBody Favorite fave) {
        repo.save(fave);
        return fave;
    }
        
    @DeleteMapping("/favorites/{ticker}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @Transactional
    public void delete(@PathVariable("ticker") String ticker) {
        repo.deleteByTicker(ticker);
    }

    
}
