import { render, screen, fireEvent } from "@testing-library/react";
import { expect, describe, it } from "vitest";
import React from "react";
import Calculator from "../components/Calculator";

describe("Calculator", () => {
  it("lägger ihop två tal korrekt", () => {
    render(<Calculator />);

    const input1 = screen.getByPlaceholderText("Tal 1");
    fireEvent.change(input1, { target: { value: "5" } });

    const input2 = screen.getByPlaceholderText("Tal 2");
    fireEvent.change(input2, { target: { value: "3" } });

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "+" } });

    const button = screen.getByRole("button", { name: /beräkna/i });
    fireEvent.click(button);

    const result = screen.getByText(/Resultat:/);
    expect(result.textContent).toBe("Resultat: 8");
  });

  it("hanterar ogiltiga värden", () => {
    render(<Calculator />);

    const input1 = screen.getByPlaceholderText("Tal 1");
    fireEvent.change(input1, { target: { value: "abc" } });

    const input2 = screen.getByPlaceholderText("Tal 2");
    fireEvent.change(input2, { target: { value: "xyz" } });

    const button = screen.getByRole("button", { name: /beräkna/i });
    fireEvent.click(button);

    const result = screen.getByText(/Resultat:/);
    expect(result.textContent).toBe("Resultat: 0");
  });

  it("hanterar division med noll", () => {
    render(<Calculator />);

    const input1 = screen.getByPlaceholderText("Tal 1");
    fireEvent.change(input1, { target: { value: "5" } });

    const input2 = screen.getByPlaceholderText("Tal 2");
    fireEvent.change(input2, { target: { value: "0" } });

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "/" } });

    const button = screen.getByRole("button", { name: /beräkna/i });
    fireEvent.click(button);

    const result = screen.getByText(/Resultat:/);
    expect(result.textContent).toBe("Resultat: Kan inte dividera med 0!");
  });
});
