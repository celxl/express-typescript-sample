/**
 * Basic swagger settings
 * Here is a good post that can help as introduction on how to document your APIs 
 * https://blog.logrocket.com/documenting-express-js-api-swagger/
 * 
 */
export const SwaggerOptions = {
    definition: {
      openapi: "3.0.1",
      info: {
        title: "Express API with Swagger",
        version: "1.0.1",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["src/controllers/common_swagger_definitions.ts", "src/controllers/*.controller.ts", "src/models/*.model.ts"],
  };