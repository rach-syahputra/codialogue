/**
 * testing scenario
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */
import React from 'react'
import { describe, it, expect, afterEach, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import matchers from '@testing-library/jest-dom/matchers'
import LoginForm from './LoginForm'
import { MemoryRouter } from 'react-router-dom'

expect.extend(matchers)

describe('LoginForm component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should handle email typing correctly', async () => {
    // Arrange
    render(<MemoryRouter><LoginForm login={() => {}} /></MemoryRouter>)
    const emailInput = screen.getByPlaceholderText('Email')

    // Action
    await userEvent.type(emailInput, 'emailtest')

    // Assert
    expect(emailInput).toHaveValue('emailtest')
  })

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<MemoryRouter><LoginForm login={() => {}} /></MemoryRouter>)
    const passwordInput = screen.getByPlaceholderText('Password')

    // Action
    await userEvent.type(passwordInput, 'passwordtest')

    // Assert
    expect(passwordInput).toHaveValue('passwordtest')
  })

  it('should call login function when login button is clicked', async () => {
    // arrange
    const mockLogin = vi.fn()
    render(<MemoryRouter><LoginForm login={mockLogin} /></MemoryRouter>)
    const emailInput = screen.getByPlaceholderText('Email')
    await userEvent.type(emailInput, 'emailtest')
    const passwordInput = screen.getByPlaceholderText('Password')
    await userEvent.type(passwordInput, 'passwordtest')
    const loginButton = screen.getByRole('button', { name: 'Login' })

    // action
    await userEvent.click(loginButton)

    // assert
    expect(mockLogin).toBeCalledWith({
      email: 'emailtest',
      password: 'passwordtest'
    })
  })
})
