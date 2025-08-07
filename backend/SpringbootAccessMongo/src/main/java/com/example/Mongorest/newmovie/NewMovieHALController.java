package com.example.Mongorest.newmovie;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// HAL (Hypertext Application Language) format
@RestController
@RequestMapping("/api/searchmovies")
public class NewMovieHALController {

    private final NewMovieRepository newMovieRepo;
    private final PagedResourcesAssembler<NewMovie> pagedResourcesAssembler;

    public NewMovieHALController(NewMovieRepository newMovieRepo, PagedResourcesAssembler<NewMovie> pagedResourcesAssembler) {
        this.newMovieRepo = newMovieRepo;
        this.pagedResourcesAssembler = pagedResourcesAssembler;
    }

    @GetMapping
    public ResponseEntity<PagedModel<EntityModel<NewMovie>>> getSearchMovies(
        @RequestParam(required=false) String query,
        @RequestParam(required=false) String genre,
        Pageable pageable
    ) {
        Page<NewMovie> searchRes = Page.empty(pageable);

        if (query != null) {
            System.out.println("HAL title: " + query);
            searchRes = newMovieRepo.findByTitleIgnoreCaseLike(query, pageable);
        } else if (genre != null) {
            System.out.println("HAL genre: " + genre);
            searchRes = newMovieRepo.findByGenreIgnoreCaseLike(genre, pageable);
        }

        PagedModel<EntityModel<NewMovie>> pagedModel = pagedResourcesAssembler.toModel(searchRes);

        return ResponseEntity.ok(pagedModel);
    }

    // @GetMapping("/{id}")
    // public ResponseEntity<EntityModel<NewMovie>> getMovieById(@PathVariable String id) {
    //     return newMovieRepository.findById(id)
    //             .map(movieModelAssembler::toModel)
    //             .map(ResponseEntity::ok)
    //             .orElse(ResponseEntity.notFound().build());
    // }
}
