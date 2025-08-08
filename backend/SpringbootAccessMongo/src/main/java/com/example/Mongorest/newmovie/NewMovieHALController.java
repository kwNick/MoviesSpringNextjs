package com.example.Mongorest.newmovie;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// HAL (Hypertext Application Language) format
@RestController
@RequestMapping("/api/searchmovies")
public class NewMovieHALController {

    private final NewMovieRepository newMovieRepo;
    private final PagedResourcesAssembler<NewMovie> pagedResourcesAssembler;
    private final NewMovieModelAssembler movieModelAssembler;   //inject the assembler

    public NewMovieHALController(NewMovieRepository newMovieRepo, PagedResourcesAssembler<NewMovie> pagedResourcesAssembler, NewMovieModelAssembler movieModelAssembler) { //inject the assembler
        this.newMovieRepo = newMovieRepo;
        this.pagedResourcesAssembler = pagedResourcesAssembler;
        this.movieModelAssembler = movieModelAssembler;     //inject the assembler
    }

    @GetMapping
    public ResponseEntity<PagedModel<EntityModel<NewMovie>>> getSearchMovies(
        @RequestParam(required=false) String query,
        @RequestParam(required=false) String genre,
        Pageable pageable
    ) {
        Page<NewMovie> searchRes = Page.empty(pageable);

        if (query != null) {
            System.out.println("HAL title: --> query: " + query + " genre: " + genre + " pageable: " + pageable);
            searchRes = newMovieRepo.findByTitleIgnoreCaseLike(query, pageable);
        } else if (genre != null) {
            System.out.println("HAL genre: --> query: " + query + " genre: " + genre + " pageable: " + pageable);
            searchRes = newMovieRepo.findByGenreIgnoreCaseLike(genre, pageable);
        }

        PagedModel<EntityModel<NewMovie>> pagedModel = pagedResourcesAssembler.toModel(searchRes, movieModelAssembler);     //use the assembler here

        return ResponseEntity.ok(pagedModel);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EntityModel<NewMovie>> getMovieById(@PathVariable String id) {
        return newMovieRepo.findById(id)
                .map(movieModelAssembler::toModel)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
