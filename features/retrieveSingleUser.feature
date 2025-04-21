Feature: Retrieve user 1

  @positive_pass
  Scenario: Retrieve data of user 1
    Given the user go endpoint of data 1
    When the user get a request for data 1
    Then the user receives the data of user 1