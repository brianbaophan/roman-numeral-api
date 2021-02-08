# Integer to Roman Numeral API

REST API for getting a Roman Numeral conversion of an integer value.

Sample REST API call:

    GET http://localhost:5000/romannumeral?query=1

    description:
        get Roman Numeral conversion of query value as integer

    request:
        ?query=1

    response: 
        I

## Table of Contents

1. [Running the App](#running-the-app)
2. [Approach](#approach)
3. [Constraints](#constraints)
4. [Structure](#structure)
5. [Dependencies](#dependencies)

## Running the App

You may run this app one of three ways 
- running locally
- building the app into a Docker image and then running the Docker Container
- pulling down image from DockerHub and running the Docker Container

### Running Locally

In order to run locally you will need to install [Node.js](https://nodejs.org/en/) and then install all the npm packages with the following command:
    
    npm install
    
After installing all the required packages, run the following command to run the app locally:
    
    npm run start

To run app in development mode:

    npm run dev
    
To run app in test mode:

    npm run test
  
### Building Docker Image and Running Docker Container

Build the image first (name it `roman-numeral-api` or your preferred name). Run the image (with name `roman-numeral-api` or your chosen image name) on port `5000` (or your preferred port)

    docker build -t roman-numeral-api .
    docker run -p 5000:5000 -d roman-numeral-api
  
### Pulling Image from DockerHub

The app can be found in my personal DockerHub (reference: https://hub.docker.com/r/brianbaophan/roman-numeral-api)

    docker pull brianbaophan/roman-numeral-api:1.0.0 or docker pull brianbaophan/roman-numeral-api:1.0.0:latest
    docker run -p 5000:5000 -d roman-numeral-api

## Approach

A reference to a Integer to Roman Numerals table can be found here (reference: https://www.tuomas.salste.net/doc/roman/numeri-romani-1-4000.html).

In order to return the roman numeral in constant time and constant space (O(1) and O(1), respectively), a `map` was used (reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). 

The idea was to loop through the `map` and if the num value is divisible by the current numeral value, the result will include a count amount of the current numeral value. After updating the result at the current numeral value, the most significant digit must be sliced off in order to continue to the next numeral value in the `map`. 

There are some edge cases:
- 4 is IV instead of IIII in Roman Numeral
- 9 is IX instead of VIIII in Roman Numeral

In order to take these edge cases in consideration, they must be added into the roman numeral map as well. 

Since the size of the `map` is finite (just based on how many single Roman Numerals there are), the process will always be the same where it runs at length of the roman numerals `map`. Therefore, the time complexity and space complexity of this app is O(1) and O(1), respectively. 

## Constraints

The API has taken into consideration the following:
- negative numbers
- zero
- decimals
- booleans
- strings
- null and undefined

Any query value of the above types will throw an error with status code of `400` (bad request).

## Structure

    ├── Dockerfile
    ├── README.md
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    ├── src
    |  ├── app.js
    |  └── intToRoman.js
    ├── start.js
    └── tests
       ├── app.test.js
       └── intToRoman.test.js
       
The app starts at `start.js` in order for **SuperTest** to run integration tests on `app.js`

The source code can be found in the **src** directory where `app.js` holds the GET API endpoint and `inToRoman.js` holds the main logic.

All unit and integration tests (using **Jest**) can be found in the **tests** directory with at least 80% code coverage. 

## Dependencies

- [Express.js](https://expressjs.com/) was used in order to build the API 

Some dev dependencies:

- [Jest](https://jestjs.io/) was used for unit testing
- [SuperTest](https://www.npmjs.com/package/supertest) was used for integration tests
- [nodemon](https://nodemon.io/) was used for efficient workflow in a development environment
