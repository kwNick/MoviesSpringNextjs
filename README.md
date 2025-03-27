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

## Installation

### Backend

#### Configurations

**Configurations** needed to run springboot applications

Springboot Specs:
\- Java (version 21.0.4) - SpringBoot (version 3.3.4) - Gradle (version 8.10.1)

- [install java](https://bell-sw.com/pages/downloads/#jdk-21-lts)
- [install gradle](https://gradle.org/install/)
- [VScode](https://code.visualstudio.com/download)
  - With extension: [Spring Boot Extension Pack](https://marketplace.visualstudio.com/items?itemName=vmware.vscode-boot-dev-pack)

Add the **application.properties** file in the **src/main/resources/** directory.
Replace the **mongodb uri** with your respective database connection string and credentials.
```/src/main/resources/application.properties file:```

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

### Frontend

Open another terminal and run these commands from the root directory:

```bash
cd frontend
cd NextjsFetchSpringBoot_MovieRecs
npm install
npm run dev
```

In the web browser go to **<http://localhost:3000>** to view the front end website.
In the web browser go to **<http://localhost:8081>** to view the back end REST api.

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
