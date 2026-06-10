import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";

import App from "../src/App";

test("renders the frontend stack label", () => {
  const html = renderToStaticMarkup(<App />);

  expect(html).toContain("Bun + Vite + React + TypeScript");
});
