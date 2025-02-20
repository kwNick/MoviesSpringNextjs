package com.example.Mongorest;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("MovieDatabase")
public class Movie {

    @Id
    private String id;
    private int movieId;
    private String title;
    private List<String> genres;
    private double averageRating;
    private int totalRatings;
    private int releaseYear;
    // private int userId;
    // private int rating;
    // private String timestamp;

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getMovieId() {
        return this.movieId;
    }

    public void setMovieId(int movieId) {
        this.movieId = movieId;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<String> getGenres() {
        return this.genres;
    }

    public void setGenres(List<String> genres) {
        this.genres = genres;
    }

    // public int getUserId() {
    //     return this.userId;
    // }

    // public void setUserId(int userId) {
    //     this.userId = userId;
    // }

    // public int getRating() {
    //     return this.rating;
    // }

    // public void setRating(int rating) {
    //     this.rating = rating;
    // }

    // public String getTimestamp() {
    //     return this.timestamp;
    // }

    // public void setTimestamp(String timestamp) {
    //     this.timestamp = timestamp;
    // }

    public double getAverageRating() {
        return averageRating;
    }

    public void setAverageRating(double averageRating) {
        this.averageRating = averageRating;
    }

    public int getTotalRatings() {
        return totalRatings;
    }

    public void setTotalRatings(int totalRatings) {
        this.totalRatings = totalRatings;
    }

    public int getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(int releaseYear) {
        this.releaseYear = releaseYear;
    }
}
