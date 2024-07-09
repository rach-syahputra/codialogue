import { fn } from '@storybook/test'
import Button from '../components/Button'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  args: { onClick: fn() }
}

export const Primary = {
  args: {
    primary: true,
    label: 'Button'
  }
}

export const Secondary = {
  args: {
    label: 'Button'
  }
}

export const Large = {
  args: {
    size: 'large',
    label: 'Button'
  }
}

export const Medium = {
  args: {
    size: 'medium',
    label: 'Button'
  }
}

export const Small = {
  args: {
    size: 'small',
    label: 'Button'
  }
}
