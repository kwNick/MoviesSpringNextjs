package com.example.Mongorest;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.PagedModel;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.example.Mongorest.newmovie.NewMovie;
import com.example.Mongorest.newmovie.NewMovieHALController;
import com.example.Mongorest.newmovie.NewMovieModelAssembler;
import com.example.Mongorest.newmovie.NewMovieRepository;

@WebMvcTest(NewMovieHALController.class)
public class NewMovieHALControllerWebTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private NewMovieRepository newMovieRepo;

    @MockBean
    private PagedResourcesAssembler<NewMovie> pagedResourcesAssembler;

    @MockBean
    private NewMovieModelAssembler movieModelAssembler;

    @Test
    void getMovieByIdShouldReturn200() throws Exception {

        NewMovie movie = new NewMovie();

        movie.setId("123");
        movie.setTitle("The Matrix");

        EntityModel<NewMovie> entityModel =
                EntityModel.of(movie);

        when(newMovieRepo.findById("123"))
                .thenReturn(Optional.of(movie));

        when(movieModelAssembler.toModel(movie))
                .thenReturn(entityModel);

        mockMvc.perform(
                get("/api/searchmovies/123")
        )
        .andExpect(status().isOk());
    }

    @Test
    void getMovieByIdShouldReturn404() throws Exception {

        when(newMovieRepo.findById("999"))
                .thenReturn(Optional.empty());

        mockMvc.perform(
                get("/api/searchmovies/999")
        )
        .andExpect(status().isNotFound());
    }

    @Test
    void searchMoviesByTitleShouldReturn200() throws Exception {

        Pageable pageable =
                PageRequest.of(0, 10);

        Page<NewMovie> page =
                new PageImpl<>(
                        List.of(),
                        pageable,
                        0
                );

        PagedModel<EntityModel<NewMovie>> pagedModel =
                PagedModel.empty();

        when(newMovieRepo.findByTitleIgnoreCaseLike(
                eq("Matrix"),
                any(Pageable.class)
        )).thenReturn(page);

        when(pagedResourcesAssembler.toModel(
                any(Page.class),
                eq(movieModelAssembler)
        )).thenReturn(pagedModel);

        mockMvc.perform(
                get("/api/searchmovies")
                        .param("query", "Matrix")
        )
        .andExpect(status().isOk());

        verify(newMovieRepo)
                .findByTitleIgnoreCaseLike(
                        eq("Matrix"),
                        any(Pageable.class)
                );

        mockMvc.perform(
                get("/api/searchmovies")
                        .param("query", "Matrix")
                        .param("page", "0")
                        .param("size", "5")
        )
        .andExpect(status().isOk());
    }

}