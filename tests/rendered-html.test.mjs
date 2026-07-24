import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the 71Squared homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Commercial specialists \| 71Squared/i);
  assert.match(html, /We build the spaces/);
  assert.match(html, /moves forward\./);
  assert.match(html, /Construction/);
  assert.match(html, /Flooring/);
  assert.match(html, /Plumbing/);
  assert.match(html, /\/images\/commercial-exterior\.jpg/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("server-renders every page in the approved sitemap", async () => {
  for (const [pathname, expected] of [
    ["/construction", "Commercial construction shaped around momentum"],
    ["/flooring", "Floors engineered for the pressure of daily business"],
    ["/plumbing", "Commercial plumbing built to keep operations moving"],
    ["/contact", "Let’s move the"],
  ]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(await response.text(), new RegExp(expected, "i"), pathname);
  }
});

test("starter preview assets have been removed", async () => {
  await assert.rejects(access(new URL("app/_sites-preview/SkeletonPreview.tsx", projectRoot)));
  await assert.rejects(access(new URL("app/_sites-preview/preview.css", projectRoot)));
});
