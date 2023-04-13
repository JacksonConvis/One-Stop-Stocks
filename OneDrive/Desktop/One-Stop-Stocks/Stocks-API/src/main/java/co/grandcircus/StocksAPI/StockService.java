package co.grandcircus.StocksAPI;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service

public class StockService {

	private RestTemplate template = new RestTemplate();

	

	public Stock[] getStocks() {

		String url = "https://tradestie.com/api/v1/apps/reddit?date=2023-04-13";

		Stock[] response = template.getForObject(url, Stock[].class);

		return response;

	}

}