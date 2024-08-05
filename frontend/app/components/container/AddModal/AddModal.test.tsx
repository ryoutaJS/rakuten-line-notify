import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import { AddModal } from "./AddModal";
import { itemData } from "@/app/type/types";

const mockFetchItemsData = vi.fn();

vi.mock("./AddModal.hooks", () => ({
  useFetchItemsData: () => ({
    fetchItemsData: mockFetchItemsData,
  }),
}));

const mockData: itemData[] = [
  {
    itemCode: "item1",
    itemName: "Item 1",
    itemPrice: 1000,
    itemUrl: "http://item1.com",
    mediumImageUrls: [{ imageUrl: "item1.png" }],
  },
  {
    itemCode: "item2",
    itemName: "Item 2",
    itemPrice: 2000,
    itemUrl: "http://item2.com",
    mediumImageUrls: [{ imageUrl: "item2.png" }],
  },
];

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("AddModal component", () => {
  const modalClose = vi.fn();

  beforeEach(() => {
    mockFetchItemsData.mockResolvedValue(mockData);
    render(<AddModal open={true} modalClose={modalClose} />);
  });

  test("モーダルが表示されるか", () => {
    expect(screen.getByText("ほしいものリストに追加")).toBeInTheDocument();
  });

  test("閉じるボタンが正しく機能するか", () => {
    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);
    expect(modalClose).toHaveBeenCalled();
  });

  test("検索入力フィールドが存在し、入力を受け付けるか", () => {
    const searchInput =
      screen.getByPlaceholderText("商品名を入力（例：スマホ）");

    fireEvent.change(searchInput, { target: { value: "スマホ" } });
    expect(searchInput).toHaveValue("スマホ");
  });

  test("検索後に結果が表示されるか", async () => {
    const searchInput =
      screen.getByPlaceholderText("商品名を入力（例：スマホ）");

    fireEvent.change(searchInput, { target: { value: "スマホ" } });
    fireEvent.submit(searchInput);

    expect(await screen.findByText("Item 1")).toBeInTheDocument();
    expect(await screen.findByText("Item 2")).toBeInTheDocument();
  });
});
