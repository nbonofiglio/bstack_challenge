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
- Install NodeJS plugin for Jenkins
- Configure NodeJS in Jenkins Global Configuration to use 19.3.0 from NodeJS.org
- Import Jenkins file to Jenkins
- Add BrowserStack credentials to Jenkins Credentials Provider
- Update credentials ID in imported pipeline
- Run Jenkins Job

