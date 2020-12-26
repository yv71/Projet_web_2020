// Test silo
// spec.js
describe('Welcome page', function () {
    it('has a correct title', function () {
        browser.get('http://localhost:4200');
        expect(browser.getTitle()).toEqual('projet-web-gr2');
    });
});


/* browser.get("http://locahost:4200"); */


