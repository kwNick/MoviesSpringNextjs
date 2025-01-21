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

### Backend:

#### Configurations

**Configurations** needed to run springboot applications
- install java
- install gradle
- make sure you have compatible versions for the springboot app
    - Java (version 21)     - SpringBoot (version 3.3.4)

Add the **application.properties** file in the **src/main/resources/** directory.
Replace the **mongodb uri** with your respective database connection string and credentials.
``/src/main/resrouces/application.properties: ``
``spring.application.name=Mongorest \nspring.data.mongodb.uri=mongodb+srv://404hero:mongo12345@helloworld.wtjmfwx.mongodb.net/Testing \nserver.port=8081``

Open another terminal and run the following commands from the root directory:

```bash
cd backend
cd SpringbootAccessMongo
./gradlew bootRun
```

### Frontend:

From the root directory:

```bash
cd frontend
cd NextjsFetchSpringBoot_MovieRecs
npm install
npm run dev
```

In the web browser go to **http://localhost:3000** to view the front end website.
In the web browser go to **http://localhost:8081** to view the back end REST api.

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

email: kwnp17c@gmail.com

github: kwNick