const express = require("express");
const route = express.Router();


/**
 * @swagger
 *      /users:
 *      get:
 *          tags: 
 *             - User API
 *          description: A simple api for getting users data
 *          summary: A simple api for getting array of users data
 *          responses:
 *              200:
 *                  description: Success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/User'
 *              404:
 *                  description: Not Found!
 *              400:
 *                  description: bag Request
 *              500:
 *                  description: Internal Server Error
 */

route.get('/users', (req, res) => {
    res.status(200).send("hello")
});

/**
 * @swagger
 *      /user:
 *      post:
 *          tags: 
 *             - User API
 *          security:
 *              - ApiKeyAuth: []
 *          requestBody:
 *              description: Optional description in *Markdown*
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          description: A simple api for send user data
 *          summary: A simple api for sending of user data
 *          responses:
 *              200:
 *                  description: Success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/User'
 *              404:
 *                  description: Not Found!
 *              400:
 *                  description: bag Request
 *              500:
 *                  description: Internal Server Error
 */
route.post('/user', (req, res) => {

});

module.exports = route;