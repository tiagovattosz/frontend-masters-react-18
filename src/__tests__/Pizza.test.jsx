import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from "../Pizza";

afterEach(cleanup);

test("alt test renders on Pizza image", async () => {
  const name = "My favorite Pizza";
  const src = "https://picsum.photos/200";

  const screen = render(
    <Pizza name={name} description="super cool pizza" image={src}></Pizza>,
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

test("to have default image if none is provided", async () => {
  const screen = render(
    <Pizza name="Calabresa Pizza" description="super cool pizza"></Pizza>,
  );

  const img = screen.getByRole("img");
  expect(img.src).toBeTruthy();
});
