package co.grandcircus.StocksAPI;


import java.time.LocalDate;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service

public class StockService {

	private RestTemplate template = new RestTemplate();
	LocalDate today = java.time.LocalDate.now();
	

	public Stock[] getStocks() {

		String url = "https://tradestie.com/api/v1/apps/reddit?date=" + today;

		Stock[] response = template.getForObject(url, Stock[].class);

		return response;

	}

}