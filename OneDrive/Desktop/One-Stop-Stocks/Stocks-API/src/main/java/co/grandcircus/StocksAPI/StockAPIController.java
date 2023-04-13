package co.grandcircus.StocksAPI;

import org.springframework.http.HttpStatus;

import java.util.List;

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

//C(R)UD -- Read One
//	@GetMapping("/books/{id}")
//	public Book readOne(@PathVariable("id") Long id) {
//		return repo.findById(id).orElseThrow(() -> new BookNotFoundException(id) );
//	}

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
	
	// CRU(D) -- Delete
	@DeleteMapping("/favorites/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable("id") Long id) {
		repo.deleteById(id);
	}
	
	// CR(U)D -- Update
	//@PutMapping("/books/{id}")
	//public Book update(@PathVariable("id") Long id,
	//		@RequestBody Book avchar) {
	//	avchar.setId(id);
	//	return repo.save(avchar);
	//}
	
	


}