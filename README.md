# MoviesSpringNextjs - Full Stack Project

## Description
This project is a Nextjs front end with a Spring Boot back end using MongoDB for data storage.

## Features
- Responsive UI with Tailwind CSS
- RESTful API for data operations

## Installation

### Backend:

#### Configurations

**Configurations** needed to run springboot applications
- install java
- install gradle
- make sure you have compatible versions for the springboot app

Add the **application.properties** file in the **src/main/resources/** directory.
Replace the **mongodb uri** with your respective database connection string and credentials.

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

## Contact
If you have any questions feel free to reach out:

email: kwnp17c@gmail.com

github: kwNick