package com.example.Mongorest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.example.Mongorest.newmovie.NewMovie;
import com.example.Mongorest.newmovie.NewMovieRepository;

@DataMongoTest
class NewMovieRepositoryTest {

    @Autowired
    private NewMovieRepository repository;

    @Test
    void shouldFindMovieByTitle() {

        NewMovie movie = new NewMovie();

        movie.setTitle("The Matrix");
        movie.setGenre("Action, Sci-Fi");

        repository.save(movie);

        Pageable pageable =
                PageRequest.of(0, 10);

        Page<NewMovie> results =
                repository.findByTitleIgnoreCaseLike(
                        "matrix",
                        pageable
                );

        assertEquals(1, results.getTotalElements());

        assertEquals(
                "The Matrix",
                results.getContent()
                        .get(0)
                        .getTitle()
        );
    }
}