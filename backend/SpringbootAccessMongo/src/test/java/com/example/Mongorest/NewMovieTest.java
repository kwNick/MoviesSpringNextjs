package com.example.Mongorest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

import com.example.Mongorest.newmovie.NewMovie;

// Basic JUnit unit Test
class NewMovieTest {

    // Tells JUnit this a test method
    @Test
    void movieTitleShouldBeCorrect() {

        // Create a movie object and set title
        NewMovie movie = new NewMovie();
        movie.setTitle("The Matrix");

        // Expect these two values to be equal
        assertEquals("The Matrix", movie.getTitle());
    }
}