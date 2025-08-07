package com.example.Mongorest.newmovie;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "newmovie", path = "newmovie")
public interface NewMovieRepository extends MongoRepository<NewMovie, String> {

    // | Feature               | `List<NewMovie>`  | `Page<NewMovie>`              |
    // | --------------------- | ----------------- | ----------------------------- |
    // | Return type           | Just results      | Results + metadata            |
    // | Includes total count? | ❌                 | ✅                          |
    // | Use case              | Lightweight query | Full pagination               |
    // | Performance           | Slightly faster   | Slightly heavier due to count |
    
    // | Return Type     | Description                               |
    // | --------------- | ----------------------------------------- |
    // | `List<T>`       | All results, no pagination info           |
    // | `Page<T>`       | Paginated results with total count        |
    // | `Slice<T>`      | Paginated results **without** total count |
    // | `Optional<T>`   | One result, safely nullable               |
    // | `T`             | One result, but throws if ambiguous       |
    // | `Stream<T>`     | Lazy processing of large results          |
    // | `GeoResults<T>` | Geospatial results with distance metadata |

    List<NewMovie> findByTitleIgnoreCaseContaining(String title, Pageable pageable);    //* */
    
    int countByTitleIgnoreCaseContaining(String title);
    
    List<NewMovie> findByGenreIgnoreCaseContaining(String genre, Pageable pageable);

    // for HAL (Hypertext Application Language) format
    Page<NewMovie> findByTitleIgnoreCaseLike(String title, Pageable pageable);    //* */
    Page<NewMovie> findByGenreIgnoreCaseLike(String genre, Pageable pageable);

    // @DeleteQuery("{'userId': ?0}")
    // public void deleteMovieByUserId(int userId);

    // Optional<Movie> deleteMovieByUserId(int userId);

    // List<NewMovie> findByTitleIgnoreCaseContainingOrGenreIgnoreCaseContaining(String query, String query2, Pageable pageable);
}
