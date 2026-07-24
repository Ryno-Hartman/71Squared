import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);
const renderedRoot = new URL("../.next/server/app/", import.meta.url);

async function readRenderedPage(name) {
  return readFile(new URL(name, renderedRoot), "utf8");
}

test("builds the 71Squared homepage as Next.js HTML", async () => {
  const html = await readRenderedPage("index.html");
  assert.match(html, /Commercial specialists \| 71Squared/i);
  assert.match(html, /We build the spaces/);
  assert.match(html, /moves forward\./);
  assert.match(html, /Construction/);
  assert.match(html, /Flooring/);
  assert.match(html, /Plumbing/);
  assert.match(html, /\/images\/commercial-exterior\.jpg/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("builds every page in the approved sitemap", async () => {
  for (const [filename, expected] of [
    ["construction.html", "Commercial construction shaped around momentum"],
    ["flooring.html", "Floors engineered for the pressure of daily business"],
    ["plumbing.html", "Commercial plumbing built to keep operations moving"],
    ["contact.html", "Let’s move the"],
  ]) {
    const html = await readRenderedPage(filename);
    assert.match(html, new RegExp(expected, "i"), filename);
  }
});

test("creates the standard Next.js output expected by Netlify", async () => {
  await access(new URL("../.next/BUILD_ID", import.meta.url));
  await access(new URL("../.next/server/app-paths-manifest.json", import.meta.url));
  await assert.rejects(access(new URL("app/_sites-preview/SkeletonPreview.tsx", projectRoot)));
  await assert.rejects(access(new URL("app/_sites-preview/preview.css", projectRoot)));
});
