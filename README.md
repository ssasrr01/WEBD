# Food Ordering and Recipe App - BoogieBites

A food ordering app with a REST API using MongoDB, Mongoose, Express and Stripe.

[Demo](https://boogiebites.onrender.com/)

![cover_image1](https://i2.paste.pics/OR9O3.png)
<br>
![cover_image1](https://i2.paste.pics/OR9T6.png)
<br>
![cover_image1](https://i2.paste.pics/OR9TI.png)
<br>
![cover_image1](https://i2.paste.pics/OR9TR.png)
<br>
![cover_image1](https://i2.paste.pics/OR9TW.png)
<br>

## Key features

- building a REST API with Express, logging requests with Morgan and sending JSend responses.
- using the MVC (Model-View-Controller) architecture with separate routers.
- rendering a server-side website with Pug templates.
- handling log in, sign up and Ordering actions with JavaScript and Axios.
- displaying Recipe of each and every dishes
- showing user-friendly alerts with success/error messages.
- updating user settings, profile picture and showing orders in user dashboard.
- accepting credit card payments with Stripe Checkout and listening to Stripe webhooks.
- sending emails with Pug templates, Nodemailer, Mailtrap and Sendgrid.
- uploading files with multer and processing images with sharp.
- deploying on Render.

## MongoDB and Mongoose

- performing CRUD operations with MongoDB database locally and on MongoDB Atlas.
- writing a script to import data into MongoDB.
- filtering, sorting, aliasing and handling pagination with Mongoose.
- manipulating data with aggregation pipeline and operators.
- leveraging Mongoose pre and post hooks: document middleware, aggregate middleware and query middleware.
- validating data and creating custom validators with Mongoose schemas and validator.
- modeling relationships between data, embedding and referencing.
- creating a factory function for CRUD operations on Categories, Users, Reviews and Orders.
- using indexes, modeling geospatial data with operators.
- publishing API documentation on Postman.

## Error handling

- handling operational errors and programmer errors with a middleware wrapping all async controllers.
- sending complete error messages in development and user-friendly messages in production.
- having a safety net for unhandled promise rejections, uncaught exceptions and SIGTERM signals with process.on.
- debugging with ndb.

## Authentication and authorization

- hashing passwords with bcryptjs.
- building a complete authentication workflow with JWT: user sign up, log in and reset password via email.
- protecting routes and restricting access according to user role (user, guide, lead guide, admin).

## Security

- implementing security best practices with express-rate-limit, helmet and CORS.
- sending tokens in secure cookies and reading them with cookie-parser.
- sanitizing data with express-mongo-sanitize, xss-clean and hpp.

