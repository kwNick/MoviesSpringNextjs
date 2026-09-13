package com.example.Mongorest;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.eq;
import org.mockito.Mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.Mongorest.newmovie.NewMovie;
import com.example.Mongorest.newmovie.NewMovieHALController;
import com.example.Mongorest.newmovie.NewMovieModelAssembler;
import com.example.Mongorest.newmovie.NewMovieRepository;


// Controller Unit Test With Mockito
// Tests:
// Does the controller's Java logic behave correctly?
@ExtendWith(MockitoExtension.class)
public class NewMovieHALControllerTest {
    
    @Mock
    private NewMovieRepository newMovieRepo;

    @Mock
    private PagedResourcesAssembler<NewMovie> pagedResourcesAssembler;

    @Mock
    private NewMovieModelAssembler movieModelAssembler;

    private NewMovieHALController controller;

    @BeforeEach
    void setUp() {
        controller = new NewMovieHALController(
            newMovieRepo,
            pagedResourcesAssembler,
            movieModelAssembler
        );
    }
// This is saying I don't care whether Spring works. I don't care whether MongoDB works. I want to test the logic inside NewMovieHALController.

    @Test
    void getMovieByIdShouldReturnMovie() {

        NewMovie movie = new NewMovie();
        movie.setId("123");
        movie.setTitle("The Matrix");

        EntityModel<NewMovie> entityModel = EntityModel.of(movie);

        when(newMovieRepo.findById("123"))
                .thenReturn(Optional.of(movie));

        when(movieModelAssembler.toModel(movie))
                .thenReturn(entityModel);

        ResponseEntity<EntityModel<NewMovie>> response =
                controller.getMovieById("123");

        assertEquals(HttpStatus.OK, response.getStatusCode());

        assertNotNull(response.getBody());

        assertEquals(
            "The Matrix",
            response.getBody().getContent().getTitle()
        );
    }

    @Test
    void getMovieByIdShouldReturn404WhenMovieDoesNotExist() {

        when(newMovieRepo.findById("999")).thenReturn(Optional.empty());

        ResponseEntity<EntityModel<NewMovie>> response = controller.getMovieById("999");

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());

        assertNull(response.getBody());
    }

    @Test
    void searchMoviesShouldSearchByTitle() {

        Pageable pageable = PageRequest.of(0, 10);

        NewMovie movie = new NewMovie();
        movie.setTitle("The Matrix");

        Page<NewMovie> page = new PageImpl<>(List.of(movie), pageable, 1);

        PagedModel<EntityModel<NewMovie>> pagedModel = PagedModel.empty();

        when(newMovieRepo.findByTitleIgnoreCaseLike(
                "Matrix",
                pageable
        )).thenReturn(page);

        when(pagedResourcesAssembler.toModel(
                eq(page),
                eq(movieModelAssembler)
        )).thenReturn(pagedModel);

        ResponseEntity<PagedModel<EntityModel<NewMovie>>> response = controller.getSearchMovies("Matrix", null, pageable);

        assertEquals(HttpStatus.OK, response.getStatusCode());

        verify(newMovieRepo).findByTitleIgnoreCaseLike("Matrix", pageable);
    }

    @Test
    void searchMoviesShouldSearchByGenre() {

        Pageable pageable = PageRequest.of(0, 10);

        Page<NewMovie> page = new PageImpl<>(List.of(), pageable, 0);

        PagedModel<EntityModel<NewMovie>> pagedModel = PagedModel.empty();

        when(newMovieRepo.findByGenreIgnoreCaseLike("Action", pageable)).thenReturn(page);

        when(pagedResourcesAssembler.toModel(eq(page), eq(movieModelAssembler))).thenReturn(pagedModel);

        ResponseEntity<PagedModel<EntityModel<NewMovie>>> response = controller.getSearchMovies(null, "Action", pageable);

        assertEquals(HttpStatus.OK, response.getStatusCode());

        verify(newMovieRepo).findByGenreIgnoreCaseLike("Action", pageable);
    }

    @Test
    void searchMoviesWithoutQueryOrGenreShouldReturnEmptyPage() {

        Pageable pageable = PageRequest.of(0, 10);

        PagedModel<EntityModel<NewMovie>> pagedModel = PagedModel.empty();

        when(pagedResourcesAssembler.toModel(any(Page.class), eq(movieModelAssembler))).thenReturn(pagedModel);

        ResponseEntity<PagedModel<EntityModel<NewMovie>>> response =controller.getSearchMovies(null, null, pageable);

        assertEquals(HttpStatus.OK, response.getStatusCode());

        verify(newMovieRepo, never()).findByTitleIgnoreCaseLike(anyString(), any(Pageable.class));

        verify(newMovieRepo, never()).findByGenreIgnoreCaseLike(anyString(), any(Pageable.class));
    }

}
