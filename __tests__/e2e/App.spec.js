const puppeteer = require("puppeteer");

it("fill in yaml from url", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "http://localhost:8080/?yaml=version%3A 1%0Aproperties%3A%20%0A - a%3A%0A%20%20%20 type%3A string"
  );

  const html = await page.content();
  await browser.close();

  expect(html).toContain('version: 1');
  expect(html).toContain('type: string');
});
