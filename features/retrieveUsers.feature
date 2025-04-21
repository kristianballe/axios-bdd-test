Feature: List of Users

  @positive
  Scenario: Retrieve all list of users
    Given the user go to list of users endpoint
    When the user get a request
    Then the user receives the list of users