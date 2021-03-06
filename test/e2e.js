const {Builder, By, Key, until} = require('selenium-webdriver');

let driver = new Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://localhost:3000/index/index');
driver.findElement(By.id('container')).click();

const _animation = driver.findElement(By.id('praise'))
driver.wait(_animation.isDisplayed(), 1000);
driver.quit();
