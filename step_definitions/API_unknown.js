import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import axios from 'axios';

let response;
let endpoint = '';
let responseTrueRed;

Given('I have the API endpoint for api unknown', function () {
  endpoint = 'https://reqres.in/api/unknown';
});

When('I send a GET request with to retrieve unknown data', async function () {
  try {
    response = await axios.get(endpoint);
  } catch (err) {
    response = err.response;
    console.error('Error occurred:', err.response || err.message);
  }

  responseTrueRed = response.data.data.find(item => item.name.toLowerCase() === 'true red');
});

Then('I should receive a good status code', function () {
  expect(response.status).to.equal(200);
});

Then('the color of true red is {string}', function (str) {
  expect(responseTrueRed.color).to.equal(str);
});
