describe("Test", function() {
  var url = 'http://localhost:4200';
  var EC = protractor.ExpectedConditions;
  var tremie = element.all(by.css('.tremie')).first();
  var cellule = element.all(by.css('.celluleSilo')).last();
  var boisseau = element.all(by.css('boisseau')).first();
  var camion = element.all(by.css('camion')).first();
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
//////////////////////////// test affichage menu ///////////////////////////////////
    
    //// Objet plein ///////
  // Test pour voir si le menu de la trémie s'affiche avec les informations du lot
  it('should click on a "trémie"', function(){
    console.log('Test trémie pleine');
    browser.manage().timeouts().implicitlyWait(55000)
    browser.sleep(2000);
    tremie.click();
    browser.sleep(1000);
    var type = element(by.css('.menu')).element(by.css('.infosGenerales')).element(by.css('h4')).element(by.css('.type'));
    expect(type.getText()).toBe('Trémie');
  });

  // Test pour voir si le menu du boisseau s'affiche avec les informations du lot  
  it('should click on a "boisseau"', function(){
    console.log('Test boisseau plein');
    browser.manage().timeouts().implicitlyWait(55000)
    browser.sleep(2000);
    boisseau.click();
    browser.sleep(1000);
    var type = element(by.css('.menu')).element(by.css('.infosGenerales')).element(by.css('h4')).element(by.css('.type'));
    expect(type.getText()).toBe('Boisseau');
  });

  // Test pour voir si le menu de la cellule s'affiche avec les informations du lot
  it('should click on a "cellule"', function(){
    console.log('Test cellule pleine');
    browser.manage().timeouts().implicitlyWait(55000)
    browser.sleep(2000);
    cellule.click();
    browser.sleep(1000);
    var type = element(by.css('.menu')).element(by.css('.infosGenerales')).element(by.css('h4')).element(by.css('.type'));
    expect(type.getText()).toBe('Cellule');
  });

  // Test pour voir si le menu du camion s'affiche avec les informations du lot
  it('should click on a "camion"', function(){
    browser.manage().timeouts().implicitlyWait(55000)
    browser.sleep(2000);
    camion.click();
    browser.sleep(1000);
    var type = element(by.css('.menu')).element(by.css('.infosGenerales')).element(by.css('h4')).element(by.css('.type'));
    expect(type.getText()).toBe('Camion');
});

  /////Objet vide /////////
    
  // Test pour vérifier qu'il ne se passe rien quand on clic sur le bouton du menu de la trémie 
  it('should do nothing if "trémie" is empty', function(){
    console.log('Test trémie vide');
    browser.manage().timeouts().implicitlyWait(55000)
    browser.sleep(2000);
    tremie.click();
    browser.sleep(1000);
    buttonMenu.click();
    browser.sleep(2000);
    expect().nothing();
  });


  it('should click on a "cellule"', function(){
    console.log('Test cellule vide');
    browser.manage().timeouts().implicitlyWait(55000)
    browser.sleep(2000);
    cellule.click();
    browser.sleep(1000);
    buttonMenu.click();
    browser.sleep(2000);
    expect(type.getText()).toBe('Cellule');
  });

  //Je suis pas sur pour ce test vu que le bouton envoyer au client n'apparait pas de suite 
  // Test pour vérifier qu'il ne se passe rien 
  it('should do nothing if "camion" is empty', function(){
    console.log('Test camion vide');
    browser.manage().timeouts().implicitlyWait(55000)
    browser.sleep(2000);
    camion.click();
    browser.sleep(1000);
    expect().nothing();
  });

  // Test pour vérifier qu'il ne se passe rien quand on clic sur le bouton du menu du boisseau
  it('should do nothing if "boisseau" is empty', function(){
    console.log('Test boisseau vide');
    browser.manage().timeouts().implicitlyWait(55000)
    browser.sleep(2000);
    boisseau.click();
    browser.sleep(1000);
    expect().nothing();
  });


  ////Déplacement du lot //////

  //Test pour voir si le lot se déplace bien de la trémie à la cellule 
  it('should send the "lot" to "cellule" if "trémie" is full', function(){
    console.log('Test déplacement trémie à cellule ');
    browser.manage().timeouts().implicitlyWait(70000)
    browser.sleep(2000);
    /*setInterval( () => {
      browser.switchTo().alert().accept().then(null, function(e) {
      });
      ///Temps en millisecondes, 10 000 = test toutes les 10 sec
    },10000);*/
    browser.sleep(50000);
    browser.wait(EC.alertIsPresent(), 60000);
    browser.switchTo().alert().accept().then(null, function(e) {});
    tremie.click();

    browser.sleep(1000);

    buttonMenu.click();
    browser.sleep(1000);
    browser.switchTo().alert().accept();
    cellule.click();

    browser.sleep(5000);
    expect(infos.getText()).toContain('Lot contenu :');
  });

  //Test pour voir si le lot se déplace bien de la trémie à la cellule 
  it('should send the "lot" to "boisseau" if "cellule" is full', function(){
    console.log('Test déplace');
    browser.manage().timeouts().implicitlyWait(70000)
    browser.sleep(2000);
    /*setInterval( () => {
      browser.switchTo().alert().accept().then(null, function(e) {
      });
      ///Temps en millisecondes, 10 000 = test toutes les 10 sec
    },10000);*/
    browser.sleep(50000);
    browser.wait(EC.alertIsPresent(), 60000);
    browser.switchTo().alert().accept().then(null, function(e) {});
    cellule.click();

    browser.sleep(1000);

    buttonMenu.click();
    browser.sleep(1000);
    browser.switchTo().alert().accept();
    boisseau.click();

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
