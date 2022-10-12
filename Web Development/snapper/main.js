const fs = require('fs');
const puppeteer = require('puppeteer');

async function captureScreenshot(){
    if(!fs.existsSync('screenshots')){
        fs.mkdirSync('screenshots');
    }
    let browser = null;
    try{
        browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();
        await page.goto('https://github.com/Uchiha-Itachi0');
        await page.screenshot({path: 'screenshots/github.png', fullPage: true});
        let image = await document.getElementById('ss');
        image.src = 'screenshots/github.png';
    }
    catch (error){
        return error;
    }
    finally {
        if(browser != null){
            await browser.close();
        }
    }
}
window.onload = captureScreenshot;