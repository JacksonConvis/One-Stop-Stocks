package co.grandcircus.StocksAPI;



import org.springframework.data.jpa.repository.JpaRepository;


public interface FavoriteRepository extends JpaRepository<Favorite, Long> {


	void deleteByTicker(String ticker);
	
}