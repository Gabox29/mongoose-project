# Social Network Project

## Table of Contents
1. [Introduction](#introduction)
2. [Description](#description)
   - [Project Requirements](#project-requirements)
3. [Technologies](#technologies)
   - [Endpoints](#endpoints)
     - [Posts](#posts)
     - [Likes](#likes)
     - [Comments](#comments)
     - [Users](#users)
4. [Installation Instructions](#installation-instructions)
5. Autores
6. [Licenses](#licenses)

## Introduction
In the backend project, we will combine knowledge in Node.js + Express and MongoDB/Mongoose technologies to develop a social media platform.

## Description
After analyzing the project requirements, the student is expected to develop a RESTful API capable of:

- User registration using Bcrypt.
- User login with token and middleware.
- Implementing CRUD operations.
- Liking/disliking a post.
- Making the backend available in production.

### Project Requirements

- Use Git branches; the final repository should have two branches: `master` or `main` and `develop`.
- Present an excellent README.

## Technologies
For API development, we will use MongoDB with Mongoose and Express. The project will be hosted on a public GitHub repository, and the presence of branches, along with well-documented commits, will be valued to analyze the project's evolution.

### Endpoints

#### Posts
- Endpoint to create a post (authentication required).
- Endpoint to update a post (authentication required).
- Endpoint to delete a post (authentication required).
- Endpoint to retrieve all posts along with user information and post comments.
- Endpoint to search for posts by name.
- Endpoint to search for posts by ID.
- Implement validation for post creation to ensure all fields are filled (except for the image, which is optional), returning a message if not.
- Pagination in increments of 10.

#### Likes
- Endpoint to like a post.
- Endpoint to unlike a post.

#### Comments
- Endpoint to create a comment on a specific post.

#### Users
- Endpoint to register a user using Bcrypt.
- Endpoint for login (using Bcrypt + JWT).
- Endpoint to retrieve information about the logged-in user.
- Endpoint for logout.
- Implement validation for user creation to ensure all fields are filled, returning a message if not.
- Middleware to check the authorship of a post when editing/deleting it.

## Installation Instructions
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up MongoDB and configure connection parameters.
4. Run the application with `npm start`.
5. Access the API at the specified endpoints.

## Autoria:
Gabriel & Catalina

## Licenses

MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
