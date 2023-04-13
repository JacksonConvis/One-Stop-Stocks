package co.grandcircus.StocksAPI;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin 
public class StockAPIController {
@Autowired
	private StockService api;

@GetMapping("/stocks")
public Stock[] readAll(){
return api.getStocks();
}
}