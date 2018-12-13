const puppeteer = require("puppeteer");

it("fill in yaml from url", async () => {
  jest.setTimeout(30000); // ci is slow...
  console.warn("starting chrome...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  console.warn("started chrome");
  console.warn("starting new page...");
  const page = await browser.newPage();
  console.warn("started new page");
  console.warn("navigating...");
  await page.goto(
    "http://localhost:8080/?yaml=version%3A 1%0Aproperties%3A%20%0A - a%3A%0A%20%20%20 type%3A string",
    { waitUntil: "networkidle0" }
  );
  console.warn("navigated");

  console.warn("getting html...");
  const html = await page.content();
  console.warn("got");
  console.warn("closing browser...");
  await browser.close();
  console.warn("closed");

  expect(html).toContain("version: 1");
  expect(html).toContain("type: string");
});
