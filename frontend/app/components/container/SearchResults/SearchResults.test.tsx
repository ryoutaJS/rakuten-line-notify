import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import { SearchResults } from './SearchResults'
import { itemData } from '@/app/type/types'
import { formatPrice } from '@/app/utils/format'

const mockData: itemData = {
  itemCode: 'item1',
  itemName: 'Item',
  itemPrice: 1000,
  itemUrl: 'http://item.com',
  mediumImageUrls: [{ imageUrl: 'item.png' }],
}

const mockPutItemData = vi.fn()
const mockRemoveImageSizeParams = vi.fn(url => url)

vi.mock('./SearchResults.hooks', () => ({
  usePutItem: () => ({
    putItemData: mockPutItemData,
    removeImageSizeParams: mockRemoveImageSizeParams,
  }),
}))

describe('SearchResults component', () => {
  beforeEach(() => {
    render(<SearchResults data={mockData} modalClose={vi.fn()} />)
  })

  test('商品名が正しく表示されているか', () => {
    const itemName = screen.getByText(mockData.itemName)
    expect(itemName).toBeInTheDocument()
  })

  test('商品価格が「¥#,###」のフォーマットで表示されているか', () => {
    const itemPrice = screen.getByText(formatPrice(mockData.itemPrice))
    expect(itemPrice.textContent).toBe('￥1,000')
  })

  test('商品ページのURLがリンクに正しく設定されているか', () => {
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('href', mockData.itemUrl)
  })

  test('商品画像が正しく表示されているか', () => {
    const imageElement = screen.getByRole('img')
    expect(imageElement).toHaveAttribute(
      'src',
      mockRemoveImageSizeParams(mockData.mediumImageUrls[0].imageUrl)
    )
  })

  test('「+リストに追加」ボタンをクリックで、putItemData()が呼び出されるか', async () => {
    const addButton = screen.getByRole('button', { name: /リストに追加/i })

    fireEvent.click(addButton)

    expect(addButton).toBeDisabled()
    await waitFor(() => expect(mockPutItemData).toHaveBeenCalledWith(mockData))
    expect(addButton).not.toBeDisabled()
  })
})
