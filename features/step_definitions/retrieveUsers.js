import { Given, When, Then } from '@cucumber/cucumber';
import {expect} from 'chai';
import axios from 'axios';

let response;
let endpoint = '';

Given('the user go to list of users endpoint', function () {
  endpoint = 'https://reqres.in/api/users?page=2';
});

When('the user get a request', async function () {
  
  try {
    response = await axios({
      method: 'get',
      url: endpoint,
      data: {
      }
    }); 
  } catch (err) {
      // Handle error - you can log the error or access err.response for more details
      response = err.response;
      console.error('Error occurred:', err.response || err.message);
    }
  })

Then('the user receives the list of users', () => {
  expect(response.data).not.to.be.empty;
});