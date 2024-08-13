import userEvent from '@testing-library/user-event'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import { DeleteConfirmDialog } from './DeleteConfirmDialog'
import { itemData } from '@/app/type/types'
import { useDeleteItem } from './DeleteConfirmDialog.hooks'

const mockData: itemData = {
  itemCode: 'item1',
  itemName: 'Item 1',
  itemPrice: 1000,
  itemUrl: 'http://item1.com',
  mediumImageUrls: [{ imageUrl: 'item1.png' }],
}

const handleClose = vi.fn()

vi.mock('./DeleteConfirmDialog.hooks', () => ({
  useDeleteItem: vi.fn((itemCode: string) => ({
    deleteItem: vi.fn(),
  })),
}))

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}))

describe('DeleteConfirmDialog component', () => {
  beforeEach(() => {
    render(<DeleteConfirmDialog open={true} handleClose={handleClose} data={mockData} />)
  })

  test('確認ダイアログのタイトルが正しく表示されているか', () => {
    const dialogTitle = screen.getByText('こちらの商品を削除します。よろしいですか？')
    expect(dialogTitle).toBeInTheDocument()
  })

  test('商品名が正しく表示されているか', () => {
    const itemName = screen.getByText(mockData.itemName)
    expect(itemName).toBeInTheDocument()
  })

  test('商品画像が正しく表示されているか', () => {
    const imageElement = screen.getByRole('img')
    expect(imageElement).toHaveAttribute('src', mockData.mediumImageUrls[0].imageUrl)
  })

  test('キャンセルボタンをクリックしたら、handleClose()が呼ばれるか', () => {
    const cancelButton = screen.getByRole('button', { name: 'キャンセル' })
    fireEvent.click(cancelButton)
    expect(handleClose).toHaveBeenCalled()
  })

  test('OKボタンをクリックしたら、deleteItem()が呼ばれるか', async () => {
    const deleteItem = vi.mocked(useDeleteItem).mockReturnValue({ deleteItem: vi.fn() })

    const okButton = screen.getByRole('button', { name: 'OK' })
    expect(okButton).toBeInTheDocument()

    await userEvent.click(okButton)
    await waitFor(() => {
      expect(deleteItem).toHaveBeenCalled()
    })
  })
})
