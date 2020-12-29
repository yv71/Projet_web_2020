describe("Test", function() {


  var url = 'http://localhost:4200';
  var EC = protractor.ExpectedConditions;
  var tremie = element.all(by.css('.tremie')).first();
  var cellule = element.all(by.css('.celluleSilo')).last();
  var infos = element(by.css('.menu')).element(by.css('.infosGenerales')).all(by.css('p')).first();
  var type = element(by.css('.menu')).element(by.css('.infosGenerales')).element(by.css('h4')).element(by.css('.type'));
  var buttonMenu = element(by.css('.menu')).element(by.css('.btnsActions')).element(by.css('button'));
  var a = 'True'

  beforeAll(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL= 600000;
  });

  beforeEach(function() {
    browser.get(url);
  });

  it('should click on a "trémie"', function(){
    console.log('Test 1');
    browser.manage().timeouts().implicitlyWait(55000)
    browser.sleep(2000);
    tremie.click();
    browser.sleep(1000);
    var type = element(by.css('.menu')).element(by.css('.infosGenerales')).element(by.css('h4')).element(by.css('.type'));
    expect(type.getText()).toBe('Trémie');

  });

  it('should do nothing if "trémie" is empty', function(){
    console.log('Test 2');
    browser.manage().timeouts().implicitlyWait(55000)
    browser.sleep(2000);
    tremie.click();
    browser.sleep(1000);
    buttonMenu.click();
    browser.sleep(2000);
    expect().nothing();
  });

  it('should click on a "cellule"', function(){
    console.log('Test 3');
    browser.manage().timeouts().implicitlyWait(55000)
    browser.sleep(2000);
    cellule.click();
    browser.sleep(1000);
    expect(type.getText()).toBe('Cellule');

  });

  it('should send the "lot" to "cellule" if "trémie" is full', function(){
    console.log('Test 4');
    browser.manage().timeouts().implicitlyWait(70000)
    browser.sleep(2000);
    /*setInterval( () => {
      browser.switchTo().alert().accept().then(null, function(e) {
      });
      ///Temps en millisecondes, 10 000 = test toutes les 10 sec
    },10000);*/
    browser.sleep(50000);
    browser.wait(EC.alertIsPresent(), 60000);
    browser.switchTo().alert().accept().then(null, function(e) {
    });
    tremie.click();

    browser.sleep(1000);

    buttonMenu.click();
    browser.sleep(1000);
    browser.switchTo().alert().accept();
    cellule.click();

    browser.sleep(5000);
    expect(infos.getText()).toContain('Lot contenu :');
  });


  it('should alert that there is no "cellule" empty', function(){
    console.log('Test 5');
    browser.manage().timeouts().implicitlyWait(200000);

    browser.sleep(2000);

    browser.wait(EC.alertIsPresent(), 60000).then(function (){;
      browser.switchTo().alert().accept().then(null, function() {
      });
      browser.sleep(1000);
      tremie.click()
      browser.sleep(1000);
      buttonMenu.click();

      browser.switchTo().alert().accept().then(null, function(e) {
      });

      browser.wait(EC.alertIsPresent(), 60000).then(function (){
        browser.switchTo().alert().accept().then(null, function(e) {
        });
        browser.sleep(1000);
        buttonMenu.click();

        browser.switchTo().alert().accept().then(null, function(e) {
        });

        browser.wait(EC.alertIsPresent(), 60000).then(function (){
          browser.switchTo().alert().accept().then(null, function(e) {
          });
          browser.sleep(1000);
          buttonMenu.click().then(function () {

            var alertFull = browser.switchTo().alert();
            browser.sleep(3000);
            expect(alertFull.getText()).toEqual("Aucune cellule de taille suffisante pour ce lot n'est disponible !");
          });
        });
      });
    });
  });
});
