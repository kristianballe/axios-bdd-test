
Feature: Update User Profile

  @positive @ito
  Scenario: Update User Profile
    Given User logged in to the app
    When user update the user profile
    Then user successfully update the profile
    And the user sees the updated profile upon retrieving the user profile
