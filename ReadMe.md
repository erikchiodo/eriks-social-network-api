[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/mit)
# 18 NoSQL: Social Network API

## Description

Our Challenge was to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. We had to use Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Table of Contents

- [Story](#story)
- [AcceptanceCriteria](#acceptancecriteria)
- [Models](#models)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

### Models

**User**:

* `username`
  * String
  * Unique
  * Required
  * Trimmed

* `email`
  * String
  * Required
  * Unique
  * Must match a valid email address (look into Mongoose's matching validation)

* `thoughts`
  * Array of `_id` values referencing the `Thought` model

* `friends`
  * Array of `_id` values referencing the `User` model (self-reference)

**Schema Settings**:

Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.

---

**Thought**:

* `thoughtText`
  * String
  * Required
  * Must be between 1 and 280 characters

* `createdAt`
  * Date
  * Set default value to the current timestamp
  * Use a getter method to format the timestamp on query

* `username` (The user that created this thought)
  * String
  * Required

* `reactions` (These are like replies)
  * Array of nested documents created with the `reactionSchema`

**Schema Settings**:

Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

---

**Reaction** (SCHEMA ONLY)

* `reactionId`
  * Use Mongoose's ObjectId data type
  * Default value is set to a new ObjectId

* `reactionBody`
  * String
  * Required
  * 280 character maximum

* `username`
  * String
  * Required

* `createdAt`
  * Date
  * Set default value to the current timestamp
  * Use a getter method to format the timestamp on query
## Installation

No Installation


## Usage

In order to use application, run npm install to install dependencies. If you run npm start, it will start the server on port 3001. If you go into insomnia you will need to create the following routes:

Friends Folder:
- Post Friend: http://localhost:3002/api/users/:userId/:friendId
- Delete Friend: http://localhost:3002/api/users/:userId/:friendId

Users Folder:
- Delete User: http://localhost:3002/api/users/:userId
- Update User: http://localhost:3002/api/users/:userId
- Get All Users: http://localhost:3002/api/users
- Get User by Id: http://localhost:3002/api/users/:userId
- Post User: http://localhost:3002/api/users

Thoughts Folder:
- Delete Thought: 
- Update Thought: http://localhost:3002/api/thoughts/:thoughtId
- Get All Thoughts: http://localhost:3002/api/thoughts
- Get Thought by Id: http://localhost:3002/api/thoughts/:thoughtId
- Post Thought: http://localhost:3002/api/thoughts

Reactions Folder:
- Create Reaction: http://localhost:3002/api/thoughts/:thoughtId/reactions
- Remove Reaction: http://localhost:3002/api/thoughts/:thoughtId/reactions/:reactionId

  ## License
  Erik's Social Network API is licensed under [MIT](https://opensource.org/licenses/mit).

## Contributing

No contribution


## Tests

No tests


## Questions

Link to my [Github Profile](https://github.com/erikchiodo)

If you need to contact me directly, here's my email: erikchiodo@gmail.com!