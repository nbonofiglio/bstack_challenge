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

      // sleep for three seconds to allow autocomplete results to load (I know this is not kosher, but did it in the interest of time)
      await driver.sleep(3000);

      // Select autocomplete result
      await driver.findElement(webdriver.By.linkText("Boston Bruins")).click();

      // Validate correct page
      var url = await driver.getCurrentUrl();
      var bruinsPage = 'https://www.nhl.com/bruins';

      if (url !== bruinsPage) {
        throw new Error("Actual url (" + url + ") does not equal " + bruinsPage);
      }

      // Validate correct page header
      var text = await driver.findElement(webdriver.By.css('#homepage_index > div.top-nav-languagebar-wrapper > div > span')).getText();
      if (text !== "THE OFFICIAL SITE OF THE BOSTON BRUINS") {
        throw new Error("Incorrrect Home Page");
      };
     
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
  console.log('Team Search Test Completed');
}

module.exports = teamSearch;