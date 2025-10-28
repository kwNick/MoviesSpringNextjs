# MoviesSpringNextjs - Full Stack Project

## Description

This project is a Nextjs front end with a Spring Boot back end using MongoDB for data storage.

## Features

- Responsive UI with Tailwind CSS
- RESTful API for data operations

## Technologies Used

- Nextjs
- TailwindCSS
- Spring Boot
- MongoDB
- Nginx
- Vercel

## Installation

### Backend

#### Configurations

The backend springboot application is hosted on my home server running on a subdomain, along with the mongo database. If your just looking to run the front end you can skip this step and move on to the front-end and only download the frontend directory.

But if you wish to run the springboot backend on your own, clone both everything and follow from here:

#### Database

Install Mongodb or use mongodb atlas cluster free tier.

MovieData accessible through...

The movie data for this project is retrieved from the [OMDb API](https://www.omdbapi.com/). You can fetch your own data by signing up for a free API key on their website.

Below is a small sample of movie data for demonstration purposes:

```json
[
  {
    "title": "The Matrix",
    "year": "1999",
    "rated": "tt0-----",
    "genre": "movie",
    "poster": "https://someurl.com",
    "plot": "A description of a movie plot..."
  },
  {
    "title": "Inception",
    "year": "2010",
    "rated": "tt1-----",
    "genre": "movie",
    "poster": "https://someurl.com",
    "plot": "A description of a movie plot..."
  },
  {
    "title": "Interstellar",
    "year": "2014",
    "rated": "tt0-----",
    "genre": "movie",
    "poster": "https://someurl.com",
    "plot": "A description of a movie plot..."
  }
]
```

#### Spring Boot App

Springboot Specs:
\- Java (version 21.0.4) - SpringBoot (version 3.3.4) - Gradle (version 8.10.1)

- [install java](https://bell-sw.com/pages/downloads/#jdk-21-lts)
- [install gradle](https://gradle.org/install/)
- [VScode](https://code.visualstudio.com/download)
  - With extension: [Spring Boot Extension Pack](https://marketplace.visualstudio.com/items?itemName=vmware.vscode-boot-dev-pack)

Add the **application.properties** file in the **backend/SpringbootAccessMongo/src/main/resources/** directory.
Replace the **mongodb uri** with your respective database connection string and credentials.
```./src/main/resources/application.properties file:```

```bash
spring.application.name=Mongorest
spring.data.mongodb.uri=<mongodb_uri_with_credentials>
server.port=8081
```

Open a terminal run the following commands from the root directory:

```bash
cd backend
cd SpringbootAccessMongo

#if you are the owner of the file
sudo chmod u+x ./gradlew 
#else
sudo chmod o+x ./gradlew

#run the springboot app
./gradlew bootRun
```

SpringBoot Entities

```java
@Document("Movies")
public class NewMovie {

    @Id
    private String id;
    private String title;
    private String year;
    private String rated;
    private String released;
    private String runtime;
    private String genre;
    private String director;
    private String writer;
    private String actors;
    private String plot;
    private String language;
    private String country;
    private String awards;
    private String poster;
    // private String Ratings;
    private String metascore;
    private String imdbrating;
    private String imdbvotes;
    private String type;
    private String boxoffice;
    //...
  }
```

```
  +----------------------+
  |      Movies          |
  +----------------------+
  | _id : ObjectId       |
  | title : string       |
  | year : string        |
  | rated : string       |
  | released : string    |
  | runtime : string     |
  | genre : string       |
  | director : string    |
  | writer : string      |
  | actors : string      |
  | plot : string        |
  | language : string    |
  | country : string     |
  | awards : string      |
  | poster : string      |
  | metascore : string   |
  | imdbrating : string  |
  | imdbvotes : string   |
  | type : string        |
  | boxoffice : string   |
  +----------------------+
```

### Frontend

Add the **env.local** file in the **frontend/NextjsFetchSpringBoot_MovieRecs/** directory.

```./frontend/NextjsFetchSpringBoot_MovieRecs/env.local file:```

```bash
#if your running it localy use these variables
SPRING_API_DOMAIN=localhost:8081

#if your only using the frontend and want to access my public api of it
SPRING_API_DOMAIN=spring-movie.duckdns.org
```

Open another terminal and run these commands from the root directory:

```bash
cd frontend
cd NextjsFetchSpringBoot_MovieRecs
npm install
npm run dev
```

In the web browser go to **<http://localhost:3000>** to view the front end website.
In the web browser go to **<http://localhost:8081>**/**http:spring-movie.duckdns.org** to view the back end REST api.

## Contributing

Guidelines for people who want to contribute

1. Fork the project
2. Create your feature branch (``git checkout -b feature/new-feature``)
3. Commit your changes (``git commit -m 'Add new feature'``)
4. Push to the branch (``git push origin feature/new-feature``)
5. Open a Pull Request

## License

MIT License

## Contact

If you have any questions feel free to reach out:

email: <kwnp17c@gmail.com>

github: [kwNick](https://github.com/KwNick)
