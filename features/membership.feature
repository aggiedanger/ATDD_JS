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
@tag
Feature: Collect e-mails and usernames

@tag1
Scenario: A valid username and email is provided by the user.
When A user provides "bob" as the username and "bob@gmail.com" as the email
Then There is a user with username "bob" and email "bob@gmail.com"
	And the member count is incremented by 1

@tag2
Scenario: A valid username with an invalid email is provided.
When A user provides "abbie" as the username and "bob.com" as the email
Then There is a user with username "abbie" and email "bob.com"

@tag3
Scenario: A duplicate email is provided by the user.
Given an email "bill@gmail.com" exists for user "bill"
When A user provides "sue" as the username and "bill@gmail.com" as the email
Then There is a user with username "sue" and email "bill@gmail.com"

@tag4
Scenario: A duplicate username is provided by the user.
Given an email "bob@gmail.com" exists for user "bob"
When A user provides "bob" as the username and "sue@gmail.com" as the email
Then There is a user with username "bob" and email "bob@gmail.com"
	And an exception is thrown

@tag5
Scenario: No username, valid email
When A user provides "" as the username and "danger@gmail.com" as the email
Then the user is added to an email only list with email "danger@gmail.com"
	And the email only count should be incremented by 1

@tag6
Scenario: Valid username, no email
When A user provides "james" as the username and "" as the email
Then the user "james" is not added
	And an exception is thrown

@tag7
Scenario: No username, no email
When A user provides "" as the username and "" as the email
Then the user "" is not added
	And an exception is thrown
