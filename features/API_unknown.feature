Feature: Login API

  Scenario: Retrieve API unknown
    Given I have the API endpoint for api unknown
    When I send a GET request with to retrieve unknown data
    Then I should receive a good status code
    And the color of true red is #BF1932
