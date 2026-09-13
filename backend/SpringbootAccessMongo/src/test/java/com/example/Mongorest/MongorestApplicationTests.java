package com.example.Mongorest;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;


// Spring application context test
@SpringBootTest
class MongorestApplicationTests {

	@Test
	void contextLoads() {
	}

}

// Spring tries to start the application context.
// So you're effectively checking:

// Can Spring Boot construct my application?
//         ↓
// Can dependencies be created?
//         ↓
// Can configuration be loaded?
//         ↓
// Can beans be created?
//         ↓
// Does the application context start?

// If something like a required bean is missing, this can fail.

// For example:
// NoSuchBeanDefinitionException

// or configuration problems can cause the test to fail.