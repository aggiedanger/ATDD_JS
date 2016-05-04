#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)

#Sample Feature Definition Template
Feature: Collect e-mails and usernames

Scenario: A valid username and email is provided by the user.
Given A user provides a valid username and email
When A user hits submit
Then The users username and email are added
	And the user gets a success message

Scenario Outline: A valid username with an invalid email is provided.
Given A user provides a valid username and an invalid email
When the user hits submit
Then the user is not added
	And the user sees an error message

Scenario: A duplicate email is provided by the user.
Given an email already exists
	And a user provides a duplicate
When the user hits submit
Then the user is added
	And the user sees a success message

Scenario: A duplicate username is provided by the user.
Given a username already exists
	And a user provides a duplicate
When the user hits submit
Then the user is not added
	And the user sees an error message

Scenario: An invalid email address is provided
Given a user provides an invalid email address
When the user hits submit
Then the user is added
	And the user sees a success message

Scenario: An invalid username is provided with illegal characters
Given a user provides an invalid username
When the user hits submit
Then the user is added
	And the user sees a success message

Scenario: No username, valid email
Given a user provides no username but a valid email
When the user hits submit
Then the user is added
	And the user sees a success message

Scenario: Valid username, no email
Given a user provides a valid username but no email
When the user hits submit
Then the user is not added
	And the user sees an error message

Scenario: No username, no email
Given a user provides no username or email
When the user hit submit
Then the user is not added
	And the user sees an error message
