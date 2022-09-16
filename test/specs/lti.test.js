const LoginPage = require('../pageobjects/login.page');
const HeaderPage = require('../pageobjects/header.page');
const fs = require('fs');
const argv = require('yargs').argv
describe('VHl Reader', () => {
    it('VHL Reader Test', async () => {
        testdata = await fs.readFileSync('./testdata/' + argv.env + '.json')
        testjson = JSON.parse(testdata)
        await LoginPage.open(testjson.readerurl);
        await LoginPage.login(argv.userName, argv.password);
        await expect(HeaderPage.headerPage).toBeExisting();
    });
});


