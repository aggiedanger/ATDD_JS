@tag
Feature: Comment Box features

@Tag1
Scenario Outline: Multiple comments
  Given comments <comment_list>
  When user navigates to page
  Then All comments <comment_list> will display

Examples:
  |comment_list                    |
  |"comment1, comment2, comment3"  |
  |"comment1"                      |
