### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  JWT stands for JSON Web Token. JWT's allow a user to stay authenticated over multiple services and APIs.

- What is the signature portion of the JWT?  What does it do?
  The signature portion of a JWT is a version of the header and payload. The signature is signed with a secret key. The secret key uses an algorithm specified in the header to sign the signature. 

- If a JWT is intercepted, can the attacker see what's inside the payload?
  If a JWT is intercepted, an attacker can see what's inside the payload by using jwt.decode(). That's why it's important to not use JWTs to transmit any sensitive information. 

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  To implement authentication with a token you first make a req w a payload to an AJAX route. The server authenticates & returns token in JSON. The token is encoded and signed. Front0end JS recieves the token and stores it in either a variable or local storage. Then for every future request, the browser sends token in the request.

- Compare and contrast unit, integration and end-to-end tests.
  Unit testing is the practice of testing smaller components of code (a single function, a single component, etc) to deliver feedback early and often. Integration testing is the practice of testing that multiple units, components, or modules work together. Integration testing is conducted to evaluate the compliance of a system or component. 

- What is a mock? What are some things you would mock?
  Mocking is primarily used in unit testing. Allows you to isolate the behavior by replacing objects with mocks that simulate their behavior. Mocking is useful if the real objects don't make sense to include in the unit test. 

- What is continuous integration?
  Continuous integration is the practice of merging smaller code changes more frequently rather than merging large code changes at the end. The goal is to build better software by testing more frequently.

- What is an environment variable and what are they used for?
  An environment variable is a dynamic-named value thaht can affect the way running processes will behave on a computer. Environment variables can be used to help programs know where to install files, where to store temporary files, and where to find user profile settings. 

- What is TDD? What are some benefits and drawbacks?
  TDD stands for Test Driven Development. It is the process of writing tests and then writing code to make that test pass. Benefits of TDD include being able to test your logic in smaller components vs having to test over a large block of code and logic. You get to test the simple functionality first. Drawbacks can include forgetting to run tests frequently, writing too many tests at once, and writing tests that are too large. 

- What is the value of using JSONSchema for validation?
  The value of using JSONSchema for validation is that user data fails fast, keeping bad data from your database. Also JSONSchema reduces the amount of code necessary for processing and validating data. JSONSchema is also easy to set up and maintain.

- What are some ways to decide which code to test?
  Code needing to be test can be identified as code has substantial bugs or code that doesn't return exactly what is expected

- What does `RETURNING` do in SQL? When would you use it?
  `RETURNING` is a clause in SQL that retrieves the values of columns that were modified by an insert, delete, or update. It is used to unconditionally and immediately end an SQL procedure by returning the flow of control to the caller of the stored procedure. 

- What are some differences between Web Sockets and HTTP?
  HTTP and WebSocket are both communication protocols used in client-server communication. HTTP is a stateless protocol that runs on top of TCP which is a connection-oriented protocol. This means that HTTP requests that are sent to the server are terminated after the server response. WebSocket is a stateful protocol, which mean the connection between the client and the server is kept alive until the explicit termination from either the client or the server. 

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  Personally, at first I was very excited to learn about Flask because Python came easy after learning JS basics and Flask helped to understand Python even more. Express has done the same thing for me with JS. I wasn't a fan of JavaScript and wasn't enjoying the learning process, but with Express I was able to understand different concepts in JS that had escaped me previously. 