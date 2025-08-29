import { Given, When, Then } from '@cucumber/cucumber';
import {expect} from 'chai';
import axios from 'axios';

let response;
let endpoint = '';

Given('the user go endpoint of data 1', function () {
  endpoint = 'https://reqres.in/api/users/1';
});

When('the user get a request for data 1', async function () {
  
  try {
    response = await axios({
      method: 'get',
      url: endpoint,
      data: {
      }
    }); 
    responseUser = response.data.data.first_name;
  } catch (err) {
      // Handle error - you can log the error or access err.response for more details
      response = err.response;
      console.error('Error occurred:', err.response || err.message);
    }
  })

Then('the user receives the data of user 1', function () {
  expect(responseUser.toLowerCase()).include("george");
});