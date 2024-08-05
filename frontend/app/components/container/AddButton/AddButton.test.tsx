import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { AddButton } from "./AddButton";

describe("AddButton component", () => {
  beforeEach(() => {
    render(<AddButton />);
  });

  it("追加ボタンが表示されているか", () => {
    const addButton = screen.getByRole("button");
    expect(addButton).toBeInTheDocument();
  });

  it("追加ボタンをクリックしたら、商品登録モーダルが表示されるか", () => {
    const addButton = screen.getByRole("button");
    fireEvent.click(addButton);

    const addModalTitle = screen.getByText("ほしいものリストに追加");
    expect(addModalTitle).toBeInTheDocument();
  });
});
