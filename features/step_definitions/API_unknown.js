const { Given, When, Then } = require('@cucumber/cucumber');
const chai = require('chai');
const axios = require('axios');
const expect = chai.expect;

let response;
let endpoint = '';

Given('I have the API endpoint for api unknown', function () {
  endpoint = 'https://reqres.in/api/unknown';
});

When('I send a GET request with to retrieve unknown data', async function () {
  
  try {
    response = await axios({
      method: 'get',
      url: endpoint,
    }); 
  } catch (err) {
      // Handle error - you can log the error or access err.response for more details
      response = err.response;
      console.error('Error occurred:', err.response || err.message);
    }
    responseTrueRed = response.data.data.filter(item => item.name.toLowerCase() === 'true red')[0];
  })

Then('I should receive a good status code', function () {
  expect(response.status).to.equal(200);
});

Then('the color of true red is {str}', function (str) {
  expect(responseTrueRed.color).to.eq(str);
});