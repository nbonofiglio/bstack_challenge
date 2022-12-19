### BrowserStack Tech Challenge ###

## Background: ##

As part of my interview process, I have been tasked with the following:

Create a Test Suite that:
- Runs on the BrowserStack platform (via BrowserStack Automate)
- Is kicked off using a Jenkins pipeline script
- Contains 3 unique assertions

On BrowserStack, the test suite should:
- Execute against 5 unique environments, concurrently

## Tech Stack ##

For this exercise, I have chosen the following tech stack:
- Node.js/JavaScript
- Selenium Webdriver

## Instructions ##

In order to run the sample suite, a user must do the following:
- Install Jenkins
- Install Node.js plugin for Jenkins
- Connect job to pull from public GitHub repository located at: https://github.com/nick-bonofiglio/browserstack/
- From GitHub repo, copy Jenkins job file to create new Pipeline job in Jenkins
- 