const { Given, When, Then } = require('@cucumber/cucumber');
const chai = require('chai');
const axios = require('axios');
const https = require('https'); // Add https module
const expect = chai.expect;

let response;
let endpoint;

Given('I have the API endpoint for login', function () {
  endpoint = "https://practice.expandtesting.com/notes/api/users/login";
});

When('I send a POST request with valid credentials', async function () {
  try {

    response = await axios({
      method: 'post',
      url: endpoint,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        email: 'cebpac@gmail.com',
        password: 'test1234'
      },
      httpsAgent: new https.Agent({ rejectUnauthorized: false }) // Bypass SSL for dev
    });

  } catch (err) {
    if (err.response) {
      response = err.response;
      console.error('API returned error:', err.response.data);
    } else {
      console.error('Request failed:', err.message);
      throw err; // Fail the test if request cannot reach server
    }
  }
});

Then('I should receive a {int} status code', function (statusCode) {
  expect(response.status).to.equal(statusCode);
});

Then('I should get a token in the response', function () {
  expect(response.data.data).to.have.property('token');
});

When('I send a POST request with missing password', async function () {
  
  try {
    response = await axios({
      method: 'post',
      url: endpoint,
      data: {
        email: 'eve.holt@reqres.in'
      }
    }); 
  } catch (err) {
      // Handle error - you can log the error or access err.response for more details
      response = err.response;
      console.error('Error occurred:', err.response || err.message);
    }
  });

Then('I should get an error message', function () {
  expect(response.data).to.have.property('error');
});