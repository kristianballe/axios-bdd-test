const { Given, When, Then } = require('@cucumber/cucumber');
const chai = require('chai');
const axios = require('axios');
const expect = chai.expect;

let response;
let endpoint = '';

Given('I have the API endpoint for login', function () {
  endpoint = 'https://reqres.in/api/login';
});

When('I send a POST request with valid credentials', async function () {
  
  try {
    response = await axios({
      method: 'post',
      url: endpoint,
      data: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    }); 
  } catch (err) {
      // Handle error - you can log the error or access err.response for more details
      response = err.response;
      console.error('Error occurred:', err.response || err.message);
    }
  })

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

Then('I should receive a {int} status code', function (statusCode) {
  expect(response.status).to.equal(statusCode);
});

Then('I should get a token in the response', function () {
  expect(response.data).to.have.property('token');
});

Then('I should get an error message', function () {
  expect(response.data).to.have.property('error');
});