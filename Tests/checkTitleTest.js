const webdriver = require('selenium-webdriver');
const caps = require('../caps');

var checkTitle = async function(capabilities) {
  let driver = new webdriver.Builder()
    .usingServer('http://nickbonofiglio_G13ade:L247vKKyeqwMA1GfL9v6@hub-cloud.browserstack.com/wd/hub')
    .withCapabilities({
      ...capabilities,
      ...capabilities['browser'] && { browserName: capabilities['browser']}
    })
    .build();

    try {
      // navigate to home page
      await driver.get("https://nhl.com/");

      var desiredTitle = "Official Site of the National Hockey League | NHL.com";
      var actualTitle = await driver.getTitle();

      if (actualTitle !== desiredTitle) {
        throw new Error("Actual title (" + actualTitle + ") does not match desired title (" + desiredTitle + ")");
      }

      await driver.executeScript(
        'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Page title validated"}}'
      );
    } catch (e) {
      await driver.executeScript(
        'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Test Failed"}}'
      );
      console.log(e);
    }
  
  await driver.quit();
  console.log("checkTitle Test completed");
}

module.exports = checkTitle;