package co.grandcircus.StocksAPI;


import java.time.LocalDate;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service

public class StockService {

	private RestTemplate template = new RestTemplate();
	LocalDate today = java.time.LocalDate.now().minusDays(14);
	
	LocalDate yesterday = today.minusDays(15);
	
	LocalDate lastWeek = today.minusWeeks(3);
	

	public Stock[] getStocks() {

		String url = "https://tradestie.com/api/v1/apps/reddit?date=" + lastWeek;

		Stock[] response = template.getForObject(url, Stock[].class);

		return response;

	}
	
	public Stock[] getYesterday() {

		String url = "https://tradestie.com/api/v1/apps/reddit?date=" + yesterday;

		Stock[] response = template.getForObject(url, Stock[].class);

		return response;

	}
	
	public Stock[] getLastWeek() {

		String url = "https://tradestie.com/api/v1/apps/reddit?date=" + lastWeek;

		Stock[] response = template.getForObject(url, Stock[].class);

		return response;

	}
	

}