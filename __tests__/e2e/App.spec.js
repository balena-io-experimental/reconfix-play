const puppeteer = require("puppeteer");

it("fill in yaml from url", async () => {
  jest.setTimeout(10000); // ci is slow...

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  const page = await browser.newPage();

  await page.goto(
    // FIXME: use example files to load up examples and test through them instead
    "http://localhost:8080/?yaml=dmVyc2lvbjogMQpwcm9wZXJ0aWVzOgogLSBhOgogICAgdHlwZTogc3RyaW5nCg%3D%3D",
    { waitUntil: "networkidle0" }
  );
  const html = await page.content();
  await browser.close();

  expect(html).toContain("version: 1");
  expect(html).toContain("type: string");
});
