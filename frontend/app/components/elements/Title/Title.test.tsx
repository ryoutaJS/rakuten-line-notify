import { render, screen } from '@testing-library/react'
import { describe, test, expect, beforeEach } from 'vitest'
import { Title } from './Title'

describe('Title component', () => {
  beforeEach(() => {
    render(<Title />)
  })

  test('タイトルが表示されてるか', () => {
    const title = screen.getByText('ほしいものリスト')
    expect(title).toBeInTheDocument()
  })

  test('infoアイコンにツールチップが設定されているか', () => {
    const infoIcon = screen.getByRole('button')
    expect(infoIcon).toBeInTheDocument()
    expect(infoIcon).toHaveAttribute(
      'aria-label',
      'リストに表示されている商品の価格がセールなどで安くなったらLINE通知が届きます。'
    )
  })
})
