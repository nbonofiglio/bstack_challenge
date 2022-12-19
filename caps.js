var username = process.env.BROWSERSTACK_USERNAME;
var accessKey = process.env.BROWSERSTACK_ACCESS_KEY;
var buildName = process.env.JENKINS_LABEL;

const username = 'nicholas.bonofiglio@gmail.com';
const accesskey = 'L247vKKyeqwMA1GfL9v6';

const caps = [
  capabilities1 = {
    'bstack:options' : {
      "os": "Windows",
      "osVersion": "10",
      "browserVersion": "latest",
      "buildName" : buildName,
      "sessionName" : "Windows 10 - Firefox",
      "userName" : username,
      "accessKey" : accesskey,
    },
    "browserName": "Firefox"
  },
  capabilities2 = {
    'bstack:options' : {
      "os": "Windows",
      "osVersion": "11",
      "browserVersion": "latest",
      "buildName" : buildName,
      "sessionName" : "Windows 11 - Chrome",
      "userName" : username,
      "accessKey" : accesskey,
    },
    "browserName": "Chrome"
  },
  capabilities3 = {
    'bstack:options' : {
      "os": "OS X",
      "osVersion": "Ventura",
      "browserVersion": "latest",
      "buildName" : buildName,
      "sessionName" : "MacOS Ventura - Chrome",
      debug: 'true', 
      networkLogs: 'true', 
      consoleLogs: 'info', 
      "userName" : username,
      "accessKey" : accesskey,
    },
    "browserName": "Chrome"
  },
  capabilities4 = {
    'bstack:options' : {
        "os": "OS X",
        "osVersion": "Ventura",
        "browserVersion": "latest",
        "buildName" : buildName,
        "sessionName" : "MacOS Ventura - Firefox",
        "userName" : username,
        "accessKey" : accesskey,
    },
    "browserName": "Firefox"
  },
  capabilities5 = {
    'bstack:options' : {
        "os": "OS X",
        "osVersion": "Ventura",
        "browserVersion": "latest",
        "buildName" : buildName,
        "sessionName" : "MacOS Ventura - Safari",
        "userName" : username,
        "accessKey" : accesskey,
    },
    "browserName": "Safari"
  }
];

module.exports = caps;