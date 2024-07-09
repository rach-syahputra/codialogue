import Arrow from '../components/Arrow'

export default {
  title: 'Arrow',
  component: Arrow,
  parameters: {
    layout: 'centered'
  }
}

export const Up = {
  args: {
    type: 'up',
    value: 0
  }
}

export const ToggledUp = {
  args: {
    type: 'up',
    value: 0,
    toggled: true
  }
}

export const Down = {
  args: {
    type: 'down',
    value: 0
  }
}

export const ToggledDown = {
  args: {
    type: 'down',
    value: 0,
    toggled: true
  }
}
