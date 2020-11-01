import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus.jsx";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("ProfileStatus component", () => {

  test("After creation span should not be null", () => {
    act(() => {
      render(<ProfileStatus status="status"/>, container)
    })
    let span = document.querySelector('span');
    expect(span).not.toBeNull();
  });

  test("After creation should be displayed correct status", () => {
    act(() => {
      render(<ProfileStatus status="status"/>, container)
    })
    expect(container.textContent).toBe("status");
  });

  test("After creation input should't be displayed", () => {
    act(() => {
      render(<ProfileStatus status="status"/>, container)
    })
    expect(() => {
      const input = container.findByType("input");
    }).toThrow();
  });

});