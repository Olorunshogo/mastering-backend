
# BACKEND
How a request flows through an app - Journey of a request

## ER diagram
This is an ER (Entity Relationship) diagram

``` backend

| Users         | Type             |                                           
|---------------|------------------|
| _id           | string        ok                     
| email         | string                                           
| password      | string                
| username      | string              
| createdAt     | datetime     

| Post          | Type                                                         
|---------------|------------------ |
| _id           | string        ok                     
| name          | string                                           
| description   | string                
| age           | string              
| createdAt     | datetime   
| updatedAt     | datetime  

```


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

## HTTP (HyperText Transfer Protocol) cheat sheet
- It's how computers (client - server) talk over the web
- Used by browsers, Postman, curl, etc. to request and send data

## HTTPS Methods

They are like tags that follow every sent request

- GET - get data (get a user, post)
- POST - create data (create post or user)
- PUT - update a whole (replace a user's profile or update a post )
- PATCH - update a part (replace a user's profile or post)
- DELETE - delete data (Delete a user)

## HTTPS Status Codes
- **200** 


| Code | Status                   | Message                                         |
|------|---------------------------|-------------------------------------------------|
| 200  | OK                        | Request was successful                          |
| 201  | Created                   | Something new was made                          |
| 204  | No Content                | Success, but no data to send back               |
| 400  | Bad Request               | Wrong request (invalid input)                   |
| 401  | Unauthorized              | You're not allowed to do this                   |
| 403  | Forbidden                 | You're not allowed to do this                   |
| 404  | Not Found                 | Nothing here at this address                    |
| 409  | Conflict                  | Data already exists or clashes                  |
| 500  | Internal Server Error     | Server messed up (not your fault)    

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Status</th>
      <th>Message</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>200</td><td style="color:green">OK</td><td>Request was successful</td></tr>
    <tr><td>201</td><td style="color:green">Created</td><td>Something new was made</td></tr>
    <tr><td>204</td><td style="color:green">No Content</td><td>Success, but no data to send back</td></tr>
    <tr><td>400</td><td style="color:orange">Bad Request</td><td>Wrong request (invalid input)</td></tr>
    <tr><td>401</td><td style="color:orange">Unauthorized</td><td>You're not allowed to do this</td></tr>
    <tr><td>403</td><td style="color:orange">Forbidden</td><td>You're not allowed to do this</td></tr>
    <tr><td>404</td><td style="color:red">Not Found</td><td>Nothing here at this address</td></tr>
    <tr><td>409</td><td style="color:red">Conflict</td><td>Data already exists or clashes</td></tr>
    <tr><td>500</td><td style="color:red">Internal Server Error</td><td>Server messed up (not your fault)</td></tr>
  </tbody>
</table>




