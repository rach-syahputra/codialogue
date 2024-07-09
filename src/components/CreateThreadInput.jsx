import React from 'react'
import useInput from '../hooks/useInput'
import PropTypes from 'prop-types'
import Button from './Button'

const CreateThreadInput = ({ onPostThread }) => {
  const [title, onChangeTitle] = useInput('')
  const [body, onChangeBody] = useInput('')
  const [category, onChangeCategory] = useInput('')

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4 '>
        <input
          className='border border-gray-500 px-3 py-1 rounded-sm'
          type='text'
          placeholder='title'
          value={title}
          onChange={onChangeTitle}
        />
        <textarea
          className='border border-gray-500 px-3 py-1 rounded-sm h-[80px]'
          value={body}
          placeholder='body'
          onChange={onChangeBody}
        />
        <input
          className='border border-gray-500 px-3 py-1 rounded-sm'
          type='text'
          value={category}
          placeholder='category'
          onChange={onChangeCategory}
        />
      </div>

      <Button label='Post Thread' onClick={() => onPostThread({ title, body, category })} />
    </div>
  )
}

CreateThreadInput.propTypes = {
  onPostThread: PropTypes.func.isRequired
}

export default CreateThreadInput
