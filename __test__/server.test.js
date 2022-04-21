// Frameworks & Libraries
const request = require('supertest');
const express = require("express");
const axios = require('axios');

// Express app object
const app = require('../server.js');

// The tests to check the response from the initialize route.
describe("Fetch an array of 4 elements when the initialize route is hit", () => {
  test("The response is an array.", done => {
  request(app) // Finds location of that express server and uses the app to make a get request.
    .get('/initialize') // Make a get request to the route
    .then((response) => {
      expect(Array.isArray(JSON.parse(response.text))).toBe(true);
      done();
    })
  })

  test("The array length is 4.", done => {
    request(app)
      .get('/initialize')
      .then((response) => {
        expect(JSON.parse(response.text).length).toBe(4);
        expect(typeof (JSON.parse(response.text)[0])).toBe('string');
        done();
      })
    })

    test("Every element is a number", done => {
      request(app)
        .get('/initialize')
        .then((response) => {
          const everyStr = (element) => {
            return typeof Number(element)  === "number";
          }
          let code = JSON.parse(response.text);
          expect(code.every(everyStr)).toBe(true);
          done();
        })
      })
});