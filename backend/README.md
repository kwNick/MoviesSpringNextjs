# MoviesSpringNextjs

## Architecture

```text
        src
        ├── main
        │   └── java
        │       └── ...
        │           ├── controller
        │           │   └── NewMovieHALController.java
        │           ├── model
        │           │   └── NewMovie.java
        │           ├── repository
        │           │   └── NewMovieRepository.java
        │           └── assembler
        │               └── NewMovieModelAssembler.java
        │
        └── test
            └── java
                └── ...
                    ├── controller
                    │   ├── NewMovieHALControllerTest.java
                    │   └── NewMovieHALControllerWebTest.java
                    │
                    └── repository
                        └── NewMovieRepositoryTest.java
```

```text
                 ┌─────────────────────┐
                 │  Integration Tests  │
                 │ Spring + MongoDB    │
                 └──────────┬──────────┘
                            │
                      fewer / slower
                            │
             ┌──────────────▼──────────────┐
             │     Web/API Tests           │
             │ @WebMvcTest + MockMvc       │
             └──────────────┬──────────────┘
                            │
                       more / faster
                            │
             ┌──────────────▼──────────────┐
             │       Unit Tests            │
             │       JUnit + Mockito       │
             └─────────────────────────────┘
```
