const webdriver = require('selenium-webdriver');
const caps = require('../caps');

var teamSearch = async function(capabilities) {

  let driver = new webdriver.Builder()
    .usingServer('https://hub-cloud.browserstack.com/wd/hub')
    .withCapabilities({
      ...capabilities,
      ...capabilities['browser'] && { browserName: capabilities['browser']}
    })
  .build();

    try {
      // navigate to home page
      await driver.get("https://nhl.com/");

      // maximize browser window
      await driver.manage().window().maximize();

      // click search icon
      await driver.findElement(webdriver.By.css(".top-nav__search__icon")).click();

      // enter "Boston" in search field
      await driver.findElement(webdriver.By.css("#top-nav__search-autocomplete__input")).sendKeys("Boston");

      await driver.sleep(1000);

      // Select autocomplete result
      await driver.findElement(webdriver.By.linkText("Boston Bruins")).click();

      // Validate correct page
      var url = await driver.getCurrentUrl();
      var bruinsPage = 'https://www.nhl.com/bruins';

      if (url !== bruinsPage) {
        throw new Error("Actual url (" + url + ") does not equal " + bruinsPage);
      } else {
        console.log ("URLs match!")
      }
     
      await driver.executeScript(
        'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Team search validated"}}'
      );
    } catch (e) {
      await driver.executeScript(
        'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Test Failed"}}'
      );
      console.log(e);
    }
  
  await driver.quit();
}

module.exports = teamSearch;