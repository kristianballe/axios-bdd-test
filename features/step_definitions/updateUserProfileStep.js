import { When, Then } from '@cucumber/cucumber';
import {expect} from 'chai';
import axios from 'axios';
import https from 'https'; // Add https module
import { endpoints } from '../../testData/endpoints.js';
import { responseMessages } from '../../testData/responseMessages.js';
import { getRandomName, getRandomPhoneNumber, state } from '../../support/helper.js';
import { getUserProfileFunction } from '../../features/step_definitions/getUserProfileStep.js'


let response;
let responseName;
let responsePhone;


When('user update the user profile', async function () {
  try {
    response = await axios({
      method: 'patch',
      url: endpoints.updateUserProfile,
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': state.responseToken
      },
      data: {
         "phone" : getRandomPhoneNumber(),
         "name" : getRandomName()
      },
      httpsAgent: new https.Agent({ rejectUnauthorized: false }) // Bypass SSL for dev
    });

    responseName = response.data.data.name;
    responsePhone = response.data.data.phone;

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

Then('user successfully update the profile', function () {
  expect(response.data.message).to.equal(responseMessages.updateUserProfile.updateUserProfileMessage);
});

Then('the user sees the updated profile upon retrieving the user profile', async function () {
  const getProfileResponse = await getUserProfileFunction();
  expect(getProfileResponse.data.data.name).to.equal(responseName);
  expect(getProfileResponse.data.data.phone).to.equal(responsePhone);
});
