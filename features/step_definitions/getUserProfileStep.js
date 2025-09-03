import { Given, When, Then } from '@cucumber/cucumber';
import {expect} from 'chai';
import axios from 'axios';
import https from 'https'; // Add https module
import { endpoints } from '../../testData/endpoints.js';
import { credentials } from '../../testData/credentials.js';
import { responseMessages } from '../../testData/responseMessages.js';


let response;
let endpoint;
let responseToken;

Given('User logged in to the app', async function () {
  endpoint = endpoints.login;
  try {

    response = await axios({
      method: 'post',
      url: endpoint,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        email: credentials.login.valid.email,
        password: credentials.login.valid.password
      },
      httpsAgent: new https.Agent({ rejectUnauthorized: false }) // Bypass SSL for dev
    });

    responseToken = response.data.data.token

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

When('user get the user profile', async function () {
  try {

    response = await axios({
      method: 'get',
      url: endpoints.getUserProfile,
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': responseToken
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

Then('user successfully retrieve the profile', function () {
  expect(response.data.message).to.equal(responseMessages.getUserProfile.getUserProfileMessage);
});