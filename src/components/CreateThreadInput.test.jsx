/**
 * testing scenario
 *
 * - CreateThreadInput component
 *   - should handle title typing correctly
 *   - should handle body typing correctly
 *   - should handle category typing correctly
 *   - should call onPostThread function correctly when Post Thread button is clicked
 */
import React from 'react'
import { describe, it, expect, afterEach, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import matchers from '@testing-library/jest-dom/matchers'
import { MemoryRouter } from 'react-router-dom'
import CreateThreadInput from './CreateThreadInput'

expect.extend(matchers)

describe('CreateThreadInput component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should handle title typing correctly', async () => {
    // Arrange
    render(<MemoryRouter><CreateThreadInput onPostThread={() => {}} /></MemoryRouter>)
    const titleInput = screen.getByPlaceholderText('title')

    // Action
    await userEvent.type(titleInput, 'titletest')

    // Assert
    expect(titleInput).toHaveValue('titletest')
  })

  it('should handle body typing correctly', async () => {
    // Arrange
    render(<MemoryRouter><CreateThreadInput onPostThread={() => {}} /></MemoryRouter>)
    const bodyInput = screen.getByPlaceholderText('body')

    // Action
    await userEvent.type(bodyInput, 'bodytest')

    // Assert
    expect(bodyInput).toHaveValue('bodytest')
  })

  it('should handle category typing correctly', async () => {
    // Arrange
    render(<MemoryRouter><CreateThreadInput onPostThread={() => {}} /></MemoryRouter>)
    const categoryInput = screen.getByPlaceholderText('category')

    // Action
    await userEvent.type(categoryInput, 'categorytest')

    // Assert
    expect(categoryInput).toHaveValue('categorytest')
  })

  it('should call onPostThread function correctly when Post Thread button is clicked', async () => {
    // arrange
    const mockOnPostThread = vi.fn()
    render(<MemoryRouter><CreateThreadInput onPostThread={mockOnPostThread} /></MemoryRouter>)
    const titleInput = screen.getByPlaceholderText('title')
    await userEvent.type(titleInput, 'titletest')
    const bodyInput = screen.getByPlaceholderText('body')
    await userEvent.type(bodyInput, 'bodytest')
    const categoryInput = screen.getByPlaceholderText('category')
    await userEvent.type(categoryInput, 'categorytest')
    const postThreadButton = screen.getByRole('button', { name: 'Post Thread' })

    // action
    await userEvent.click(postThreadButton)

    // assert
    expect(mockOnPostThread).toBeCalledWith({
      title: 'titletest',
      body: 'bodytest',
      category: 'categorytest'
    })
  })
})
