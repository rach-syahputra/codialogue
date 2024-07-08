/**
 * testing scenario
 *
 * - RegisterForm component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react'
import { describe, it, expect, afterEach, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import matchers from '@testing-library/jest-dom/matchers'
import { MemoryRouter } from 'react-router-dom'
import RegisterForm from './RegisterForm'

expect.extend(matchers)

describe('RegisterForm component0', () => {
  afterEach(() => {
    cleanup()
  })

  it('should handle name typing correctly', async () => {
    // Arrange
    render(<MemoryRouter><RegisterForm login={() => {}} /></MemoryRouter>)
    const nameInput = screen.getByPlaceholderText('Name')

    // Action
    await userEvent.type(nameInput, 'nametest')

    // Assert
    expect(nameInput).toHaveValue('nametest')
  })

  it('should handle email typing correctly', async () => {
    // Arrange
    render(<MemoryRouter><RegisterForm login={() => {}} /></MemoryRouter>)
    const emailInput = screen.getByPlaceholderText('Email')

    // Action
    await userEvent.type(emailInput, 'emailtest')

    // Assert
    expect(emailInput).toHaveValue('emailtest')
  })

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<MemoryRouter><RegisterForm login={() => {}} /></MemoryRouter>)
    const passwordInput = screen.getByPlaceholderText('Password')

    // Action
    await userEvent.type(passwordInput, 'passwordtest')

    // Assert
    expect(passwordInput).toHaveValue('passwordtest')
  })

  it('should call register function when register button is clicked', async () => {
    // arrange
    const mockRegister = vi.fn()
    render(<MemoryRouter><RegisterForm register={mockRegister} /></MemoryRouter>)
    const nameInput = screen.getByPlaceholderText('Name')
    await userEvent.type(nameInput, 'nametest')
    const emailInput = screen.getByPlaceholderText('Email')
    await userEvent.type(emailInput, 'emailtest')
    const passwordInput = screen.getByPlaceholderText('Password')
    await userEvent.type(passwordInput, 'passwordtest')
    const registerButton = screen.getByRole('button', { name: 'Register' })

    // action
    await userEvent.click(registerButton)

    // assert
    expect(mockRegister).toBeCalledWith({
      name: 'nametest',
      email: 'emailtest',
      password: 'passwordtest'
    })
  })
})
