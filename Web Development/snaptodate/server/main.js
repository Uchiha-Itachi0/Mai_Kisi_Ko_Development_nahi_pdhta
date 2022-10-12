const puppeteer = require('puppeteer');
const fs = require('fs');
const express = require('express');
const CORS = require('cors');
const app = express();

const PORT = process.env.PORT || 8080;
app.use(CORS());

app.get('/', async (req, res) => {
    if (!fs.existsSync('screenshots')) {
        fs.mkdirSync('screenshots');
    }
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto("http://localhost:3000");
    const screenBuffer = await page.screenshot({ path: 'screenshots/github.png', fullPage: true });
    res.send(screenBuffer);
    await browser.close();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});