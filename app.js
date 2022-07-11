const express = require("express");
const swaggerDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const userRoute = require('./routes/users.routes');

const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Test API",
      description: "Example of API Doc",
      version: "1.0.0",
      contact: {
        name: "Bapi Tudu",
        email: "bapitudu@matrixnmedia.com",
        url: "https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md",
      },
      license: {
        name: "Apache 2.0",
        url: "https://www.apache.org/licenses/LICENSE-2.0.html",
      },
    },
    servers: [
      {
        url: "http://localhost:3002",
        description: "Development server",
      },
      {
        url: "http://localhost:3003",
        description: "Staging server",
      },
    ],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: "apiKey",
          in: "header",
          name: "X-API-Key",
        },
      },
      schemas: {
        GeneralError: {
          type: "object",
          properties: {
            data: {
              type: "object",
              nullable: true,
              default: null,
            },
            code: {
              type: "integer",
              format: "int32",
            },
            message: {
              type: "string",
            },
            error: {
              type: "boolean",
              default: false,
            },
          },
        },
        Pet: {
          type: "object",
          properties: {
            name: {
              type: "string",
              example: "Dog",
            },
            color: {
              type: "string",
              example: "black",
            },
            price: {
              type: "integer",
              example: 1200,
            },
          },
        },
        User: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                },
                email: {
                    type: 'string',
                },
                phone: {
                    type: 'string',
                }
            }
        }
      },
    },
  },
  // looks for configuration in specified directories
  apis: ["./routes/*.js"],
};
const swaggerSpec = swaggerDoc(options);

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(userRoute);

app.listen(3002, () => {
  console.log("App is running on port 3002");
});
