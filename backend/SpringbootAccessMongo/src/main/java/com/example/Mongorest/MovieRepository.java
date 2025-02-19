package com.example.Mongorest;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "movie", path = "movie")
public interface MovieRepository extends MongoRepository<Movie, String> {

    // List<Movie> findByUserId(int userId);
    List<Movie> findByMovieId(int movieId);
    
    // List<Movie> findByTitle(String title);
    // List<Movie> findByTitleContaining(String title);
    // List<Movie> findByTitleLike(String title);
    // List<Movie> findByTitleRegex(String title);
    // List<Movie> findByTitleIgnoreCase(String title);
    List<Movie> findByTitleIgnoreCaseLike(String title, Pageable pageable);    //* */

    int countByTitleIgnoreCaseLike(String title);

    //What about Optional type? Doesn't seem to work gets type Errors 
    // Optional<Movie> findByTitleLike(String title);
    // @DeleteQuery("{'userId': ?0}")
    // public void deleteMovieByUserId(int userId);
    // Optional<Movie> updateMovieByUserId(int userId);
    // Optional<Movie> deleteMovieByUserId(int userId);
}
