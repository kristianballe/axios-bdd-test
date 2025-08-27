Feature: Login API

  @positive
  Scenario: Successful login
    Given I have the API endpoint for login
    When I send a POST request with valid credentials
    Then I should receive a 200 status code
    And I should get a token in the response

  @positive_pass
  Scenario: Failed login with missing password
    Given I have the API endpoint for login
    When I send a POST request with missing password
    Then I should receive a 400 status code
    And I should get an error message