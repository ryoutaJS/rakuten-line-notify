import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { Header } from './Header'

describe('Header component', () => {
  test('ヘッダーに通知アイコンが表示されるか確認', () => {
    render(<Header />)
    const notifyIcon = screen.getByTestId('CircleNotificationsIcon')
    expect(notifyIcon).toBeInTheDocument()
  })

  test('ヘッダータイトルが正しく表示されるか確認', () => {
    render(<Header />)
    const headerTitle = screen.getByText('楽天価格通知アプリ')
    expect(headerTitle).toBeInTheDocument()
  })
})
