package com.example.Mongorest.newmovie;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/newmovie")
public class NewMovieController {
    
    NewMovieRepository newMovieRepo;

    public NewMovieController(NewMovieRepository newMovieRepo) {
        this.newMovieRepo = newMovieRepo;
    }

//     | Method       | Return Type                      | Notes                                                              |
//     | ------------ | -------------------------------- | ------------------------------------------------------------------ |
//     | `/search`    | `List<NewMovie>`                 | Returns raw list — HTTP 200 by default                             |
//     | `/search-re` | `ResponseEntity<List<NewMovie>>` | Explicit response wrapper — allows for status codes, headers, etc. |

    @GetMapping("/search")
    public ResponseEntity<List<NewMovie>> getSearchMovies(@RequestParam(required=false) String query, @RequestParam(required=false) String genre, Pageable pageable) {
        // System.out.println("Param: " + param);
        if(query != null){
            System.out.println("title: " + query);
            return ResponseEntity.ok(newMovieRepo.findByTitleIgnoreCaseContaining(query, pageable));
        }else if (genre != null) {
            System.out.println("genre: " + genre);
            return ResponseEntity.ok(newMovieRepo.findByGenreIgnoreCaseContaining(genre, pageable));
        }
        // If no query or genre is provided, return an empty list or handle as needed
        return ResponseEntity.ok(List.of());  // Return an empty list if no query is provided
        
    }

    // @GetMapping("/search")
    // public List<NewMovie> getMethodNameRe(@RequestParam String query, Pageable pageable) {
    //     return newMovieRepo.findByTitleIgnoreCaseContaining(query, pageable);
    // }


// HAL (Hypertext Application Language) format
// @RestController
// @RequestMapping("/api/movies")
// public class NewMovieController {

//     private final NewMovieRepository newMovieRepository;
//     private final PagedResourcesAssembler<NewMovie> pagedResourcesAssembler;

//     public NewMovieController(NewMovieRepository newMovieRepository,
//                               PagedResourcesAssembler<NewMovie> pagedResourcesAssembler) {
//         this.newMovieRepository = newMovieRepository;
//         this.pagedResourcesAssembler = pagedResourcesAssembler;
//     }

//     @GetMapping
//     public ResponseEntity<PagedModel<EntityModel<NewMovie>>> getAllMovies(
//             @RequestParam(defaultValue = "0") int page,
//             @RequestParam(defaultValue = "10") int size,
//             @RequestParam(defaultValue = "") String title,
//             Pageable pageable
//     ) {
//         Page<NewMovie> moviePage;

//         if (title != null && !title.isBlank()) {
//             moviePage = newMovieRepository.findByTitleIgnoreCaseContaining(title, pageable);
//         } else {
//             moviePage = newMovieRepository.findAll(pageable);
//         }

//         PagedModel<EntityModel<NewMovie>> pagedModel = pagedResourcesAssembler.toModel(moviePage);

//         return ResponseEntity.ok(pagedModel);
//     }
// }

}
