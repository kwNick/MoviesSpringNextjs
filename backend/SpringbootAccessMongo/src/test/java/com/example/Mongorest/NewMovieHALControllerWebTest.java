package com.example.Mongorest;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.hateoas.EntityModel;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.example.Mongorest.newmovie.NewMovie;
import com.example.Mongorest.newmovie.NewMovieHALController;
import com.example.Mongorest.newmovie.NewMovieModelAssembler;
import com.example.Mongorest.newmovie.NewMovieRepository;

// HTTP/MVC Controller Test With MockMvc
// Tests:
// Does Spring MVC route the HTTP request to the controller and produce the expected HTTP response?
@WebMvcTest(NewMovieHALController.class)
public class NewMovieHALControllerWebTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private NewMovieRepository newMovieRepo;

//     @MockitoBean
//     private PagedResourcesAssembler<NewMovie> pagedResourcesAssembler;

    @MockitoBean
    private NewMovieModelAssembler movieModelAssembler;

    @Test
    void getMovieByIdShouldReturn200() throws Exception {

        NewMovie movie = new NewMovie();

        movie.setId("67c619d068c9a0a26a169cf2");
        movie.setTitle("The Matrix");

        EntityModel<NewMovie> entityModel = EntityModel.of(movie);

        when(newMovieRepo.findById("67c619d068c9a0a26a169cf2")).thenReturn(Optional.of(movie));

        when(movieModelAssembler.toModel(movie)).thenReturn(entityModel);

        mockMvc.perform(get("/api/searchmovies/67c619d068c9a0a26a169cf2")).andExpect(status().isOk());
    }

    @Test
    void getMovieByIdShouldReturn404() throws Exception {

        when(newMovieRepo.findById("999")).thenReturn(Optional.empty());

        mockMvc.perform(get("/api/searchmovies/999")).andExpect(status().isNotFound());
    }

    @Test
    void searchMoviesByTitleShouldReturn200() throws Exception {

        Pageable pageable = PageRequest.of(0, 10);

        Page<NewMovie> page = new PageImpl<>(List.of(), pageable,1);

        // PagedModel<EntityModel<NewMovie>> pagedModel = PagedModel.empty();

        when(newMovieRepo.findByTitleIgnoreCaseLike(eq("Matrix"),any(Pageable.class))).thenReturn(page);

        // EntityModel<NewMovie> entityModel = EntityModel.of(movie);

        // when(movieModelAssembler.toModel(movie))
        //         .thenReturn(entityModel);

        // when(pagedResourcesAssembler.toModel(any(Page.class), eq(movieModelAssembler))).thenReturn(pagedModel);

        mockMvc.perform(get("/api/searchmovies").param("query", "Matrix")).andExpect(status().isOk()).andReturn();

        verify(newMovieRepo).findByTitleIgnoreCaseLike(eq("Matrix"), any(Pageable.class));

        mockMvc.perform(get("/api/searchmovies")
                .param("query", "Matrix")
                .param("page", "0").param("size", "5"))
                .andExpect(status().isOk())
                .andDo(print())
                // .andExpect(jsonPath("$._embedded").exists())
                // .andExpect(jsonPath("$._embedded.newmovie").exists())
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.newmovie[0]").exists())
                .andExpect(jsonPath("$._embedded.newmovie[0].title").value("The Matrix"))
                .andExpect(jsonPath("$._embedded.newmovie[0]._links.self.href").exists());

        mockMvc.perform(get("/api/searchmovies").param("genre", "Action").param("page", "0").param("size", "5")).andExpect(status().isOk());
    }

}

// Mock HTTP request
//        ↓
// Spring MVC
//        ↓
// Controller
//        ↓
// Mock dependencies
//        ↓
// HTTP response