BUG #1: routes/auth.js/
    - Add in error status code (401) for user login route

BUG #2: models/user.js/
    -Remove username and password arguments from the getAll function

BUG #3: middleware/auth.js/
    - Instead of using jwt.decode(), use jwt.verify() to verify the token using the SECRET_KEY variable

BUG #4: 