package com.example.Mongorest.newmovie;

import org.springframework.data.domain.Pageable;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;

@Component
public class NewMovieModelAssembler implements RepresentationModelAssembler<NewMovie, EntityModel<NewMovie>> {

    @Override
    @NonNull
    public EntityModel<NewMovie> toModel(@NonNull NewMovie movie) {
        // Spring HATEOAS can only create links to controller methods, not repository methods, because only controllers are mapped to actual HTTP routes.
        return EntityModel.of(
                movie,
                linkTo(methodOn(NewMovieHALController.class).getMovieById(movie.getId())).withSelfRel(),
                linkTo(methodOn(NewMovieController.class).getSearchMovies("","", Pageable.unpaged()))
                        .withRel("newmovie")
            );
    }
}