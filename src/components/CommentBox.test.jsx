/**
 * testing scenario
 *
 * - CommentBox component
 *   - should handle content typing correctly
 *   - should set content to empty when cancel button is clicked
 *   - should call postComment function when comment button is clicked
 */
import React from 'react'
import { describe, it, expect, afterEach, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import matchers from '@testing-library/jest-dom/matchers'
import { MemoryRouter } from 'react-router-dom'
import CommentBox from './CommentBox'

expect.extend(matchers)

describe('CommentBox component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should handle content typing correctly', async () => {
    // Arrange
    render(<MemoryRouter><CommentBox threadId={'thread-1'} postComment={() => {}} /></MemoryRouter>)
    const contentInput = screen.getByPlaceholderText('Add a comment')

    // Action
    await userEvent.type(contentInput, 'contenttest')

    // Assert
    expect(contentInput).toHaveValue('contenttest')
  })

  it('should set content input to empty when cancel button is clicked', async () => {
    // arrange
    render(<MemoryRouter><CommentBox threadId={'thread-1'} postComment={() => {}} /></MemoryRouter>)
    const contentInput = screen.getByPlaceholderText('Add a comment')
    await userEvent.type(contentInput, 'contenttest')
    const cancelButton = screen.getByRole('button', { name: 'Cancel' })

    // action
    await userEvent.click(cancelButton)

    // assert
    expect(contentInput).toHaveValue('')
  })

  it('should call postComment function correctly when comment button is clicked', async () => {
    // arrange
    const mockPostComment = vi.fn()
    render(<MemoryRouter><CommentBox threadId={'thread-1'} postComment={mockPostComment} /></MemoryRouter>)
    const contentInput = screen.getByPlaceholderText('Add a comment')
    await userEvent.type(contentInput, 'this is a comment')
    const commentButton = screen.getByRole('button', { name: 'Comment' })

    // action
    await userEvent.click(commentButton)

    // assert
    expect(mockPostComment).toBeCalledWith({
      threadId: 'thread-1',
      content: 'this is a comment'
    })
    expect(contentInput).toHaveValue('')
  })
})
