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

//     | Return Type           | Control Over Status   | Control Over Headers     | Use Case                         |
//     | --------------------- | --------------------- | ------------------------ | -------------------------------- |
//     | `ResponseEntity<T>`   | ✅ Yes                 | ✅ Yes                    | Full control, REST API           |
//     | `T`                   | ❌ No (always 200)     | ❌ No                     | Simple REST responses            |
//     | `void`                | ❌ No (usually 204)    | ❌ No                     | No response needed               |
//     | `String`              | ✅ (for views or text) | ❌ (unless @ResponseBody) | View names or plain text         |
//     | `ModelAndView`        | ✅ Yes (via config)    | ✅ Yes                    | Server-side rendered web apps    |
//     | `Map<String, Object>` | ❌ No (always 200)     | ❌ No                     | JSON responses with mixed fields |
//     | `Optional<T>`         | ✅ Yes (via mapping)   | ✅ Yes (via mapping)      | Optional resource with fallback  |


    @GetMapping("/search")
    public ResponseEntity<List<NewMovie>> getSearchMovies(@RequestParam(required=false) String query, @RequestParam(required=false) String genre, Pageable pageable) {

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

}
