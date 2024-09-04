import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { AddButton } from './AddButton'

describe('AddButton component', () => {
  beforeEach(() => {
    render(<AddButton />)
  })

  it('追加ボタンが表示されているか', () => {
    const addButton = screen.getByRole('button')
    expect(addButton).toBeInTheDocument()
  })
})
