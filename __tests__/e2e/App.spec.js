const puppeteer = require("puppeteer");

it("fill in yaml from url", async () => {
  jest.setTimeout(60000); // ci is slow...

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  const page = await browser.newPage();

  await page.goto(
    // FIXME: use example files to load up examples and test through them instead
    "http://localhost:8080/?yaml=dmVyc2lvbjogMQpwcm9wZXJ0aWVzOgogLSBhIHN0cmluZzoKICAgIHR5cGU6IHN0cmluZwo%3D",
    { waitUntil: "networkidle0" }
  );
  await page.waitForSelector('#ace_editor');
  await page.waitForSelector('.ace_content');
  const html = await page.content();
  await browser.close();

  expect(html).toContain("properties[0].a string.type");
});
