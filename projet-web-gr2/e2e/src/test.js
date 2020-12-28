
describe("Test", function() {

  var url = 'http://localhost:4200';
  var tremie = element(by.css('.tremie'));

  beforeEach(function() {
    browser.get(url);
    /*browser.get(url).catch(function () {
      return browser.switchTo().alert().then(function (alert) {
        alert.accept();
        return browser.get(url);
      });
    });*/
  });

  it('should click on a cell', function(){
    browser.sleep(2000);
    tremie.click();
    browser.sleep(2000);
    expect(tremie.getAttribute('pleine')).toEqual('True');
  });

});
