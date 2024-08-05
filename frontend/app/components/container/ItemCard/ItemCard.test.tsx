import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import { ItemCard } from "./ItemCard";
import { itemData } from "@/app/type/types";
import { formatPrice } from "@/app/utils/format";

const mockData: itemData = {
  itemCode: "item1",
  itemName: "Item",
  itemPrice: 1000,
  itemUrl: "http://item.com",
  mediumImageUrls: [{ imageUrl: "item.png" }],
};

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("ItemCard component", () => {
  beforeEach(() => {
    render(<ItemCard data={mockData} />);
  });

  test("商品名が正しく表示されているか", () => {
    const itemName = screen.getByText(mockData.itemName);
    expect(itemName).toBeInTheDocument();
  });

  test("商品価格が「¥#,###」のフォーマットで表示されているか", () => {
    const itemPrice = screen.getByText(formatPrice(mockData.itemPrice));
    expect(itemPrice.textContent).toBe("￥1,000");
  });

  test("商品ページのURLがリンクに正しく設定されているか", () => {
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", mockData.itemUrl);
  });

  test("商品画像が正しく表示されているか", () => {
    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveAttribute(
      "src",
      mockData.mediumImageUrls[0].imageUrl,
    );
  });

  test("削除ボタンをクリックしたら、確認ダイアログが表示されるか", () => {
    const deleteButton = screen.getByRole("button");
    fireEvent.click(deleteButton);
    expect(
      screen.getByText("こちらの商品を削除します。よろしいですか？"),
    ).toBeInTheDocument();
  });
});
