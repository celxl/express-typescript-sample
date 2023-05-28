# Basic example to use express+typescript server loading routes dynamically

## Problem
 Well not really a problem or issue, this solution is more about simplicity. When using express for your nodejs backend server
 there is a need to define the routes where endpoints will live, and while the structure of the project is entirely up to you, base on
 preference or project requirements defining the routes can be enjoying or even lead to dummy errors.

## Solution
 This implementation tries to show a way we simplify routes loading and routes binding to controllers.  
 Note: this is not thought in modular pattern for your file structure, so if you aim to use that (similar to what Nestjs does) you may need to add some extra work or perhaps is not suitable at all. So lets goe with premise that your files are organized:
 * controllers - for endpoints
 * services - your business logic (optional)
 * models - your db models (optional)  

 For this particular example your express project have the following structure
 - node_modules/
 - src/
    - controllers
        - users.controller.ts (just example)
    - services
        - users.service.ts (just example)
    - models
        - user.model.ts (just example)
    - commons (to put common utilities ex. db config, exertions, etc)
 - .env (optional but recommended for environment variables)
 - app.ts (server file)
 - package.json  (this is clear right?)
 - tsconfig.json (typescript config file)  

### Adding new controllers
 There is just 2 important things to keep in mid
 * First file naming, your controllers must have a prefix .controller.ts or what ever you define for it in the **controllerPrefix** variable of your app.ts file
 * Second at the bottom of your controller file you must export 
 ```
 export default {
    baseUrl,
    router
};
```
where *baseUrl* is the base url you want to give to that controller ex baseUrl = "/users" and *router* is express router (see the example controller included in this implementation **base.controller.ts**)

### Global Error Handler
 This is actually optional and you can go with whatever you prefer, but it will make your life way easier to use.  
 **src/commons/exceptions.ts** defines most common http errors you can of course add or remove whatever you need but the idea should be clear. Whenever is needed to throw special error intended for FE client this come handy, and the function *globalErrorHandler* will take care of sending the error to FE with the desired status code.  
 Take a look to **src/controllers/error-test.controller.ts** to see an example of how errors are show to FE. run ```curl localhost:3000/v1/exceptions/bad_req``` and see API response and logs in your terminal

## Documentation
 Documenting your Rest APIs si a crucial part of every development process, your team needs to be aware how your APIs works. From your Frontend developers who will constantly using the documentation to create a good client for the project, to the QA team that needs to know what is going on so testing become possible. But further for yourself because after some weeks you will start forgetting what you did.

### TIP
 For a junior developer that is just starting with *nodejs* and *express*  Rest APIs is maybe best to don't put much attention here just jet, documentation is **super important**  but first you need to focus in learning how things work

### OpenApi specification and swagger client
 OpenApi is a mature standard used for APIs documentation and generally is used combined with a swagger client allowing to visualize and test those APIs.

# Dependencies
 * express - nodejs server
 * dotenv - to work with environment variables
 * glob - to dynamically load your controllers without the need to create separate files for routes

## Dev Dependencies
 * @types/express
 * @types/morgan
 * @types/node
 * @types/swagger-jsdoc - For API documentation
 * @types/swagger-ui-express - For API documentation
 * morgan
 * nodemon,
 * swagger-jsdoc - For API documentation
 * swagger-ui-express - For API documentation
 * ts-node
 * typescript

# Help
More than anything i made this to remind myself how to easily set up an express server with typescript to load routes dynamically but im happy to respond questions and accept suggestions so don hesitate in reaching out

