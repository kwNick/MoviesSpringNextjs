package com.example.Mongorest.newmovies;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "newmovie", path = "newmovie")
public interface NewMovieRepository extends MongoRepository<NewMovie, String> {

    // List<Movie> findByUserId(int userId);
    // List<NewMovie> findByMovieId(int movieId);
    
    // List<Movie> findByTitle(String title);
    // List<Movie> findByTitleContaining(String title);
    // List<Movie> findByTitleLike(String title);
    // List<Movie> findByTitleRegex(String title);
    // List<Movie> findByTitleIgnoreCase(String title);
    List<NewMovie> findByTitleIgnoreCaseLike(String title, Pageable pageable);    //* */

    int countByTitleIgnoreCaseLike(String title);

    //What about Optional type? Doesn't seem to work gets type Errors 
    // Optional<Movie> findByTitleLike(String title);
    // @DeleteQuery("{'userId': ?0}")
    // public void deleteMovieByUserId(int userId);
    // Optional<Movie> updateMovieByUserId(int userId);
    // Optional<Movie> deleteMovieByUserId(int userId);
}
