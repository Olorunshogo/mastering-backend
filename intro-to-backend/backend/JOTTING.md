
# BACKEND
How a request flows through an app - Journey of a request

- Income request
|
- app.js -- receives the request
|
- routes -- Checks the address (URL path) and method (GET, POST, etc.)
|
- controller -- Does the task (fetching, saving, deleting, etc.) asked in the request
|
- Request sent to client/user

- app.use gives the ability to our server to parse the JSON request it gets from the client side

