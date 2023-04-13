package co.grandcircus.StocksAPI;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="favorites")
public class Favorite {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	public int no_of_comments;

    public String sentiment;

    public double sentiment_score;

    public String ticker;

    public Favorite() {}
    
	public Favorite(int no_of_comments, String sentiment, double sentiment_score, String ticker) {
		super();
		this.no_of_comments = no_of_comments;
		this.sentiment = sentiment;
		this.sentiment_score = sentiment_score;
		this.ticker = ticker;
	}

	public int getNo_of_comments() {
		return no_of_comments;
	}

	public void setNo_of_comments(int no_of_comments) {
		this.no_of_comments = no_of_comments;
	}

	public String getSentiment() {
		return sentiment;
	}

	public void setSentiment(String sentiment) {
		this.sentiment = sentiment;
	}

	public double getSentiment_score() {
		return sentiment_score;
	}

	public void setSentiment_score(double sentiment_score) {
		this.sentiment_score = sentiment_score;
	}

	public String getTicker() {
		return ticker;
	}

	public void setTicker(String ticker) {
		this.ticker = ticker;
	}
    
    
    
}
