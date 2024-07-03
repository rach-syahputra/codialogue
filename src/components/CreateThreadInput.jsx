import React from 'react'
import useInput from '../hooks/useInput'
import PropTypes from 'prop-types'

const CreateThreadInput = ({ onPostThread }) => {
  const [title, onChangeTitle] = useInput('')
  const [body, onChangeBody] = useInput('')
  const [category, onChangeCategory] = useInput('')

  return (
    <form
      action=''
      className='flex flex-col gap-4'
      onSubmit={() => onPostThread({ title, body, category })}
    >
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
        ></textarea>
        <input
          className='border border-gray-500 px-3 py-1 rounded-sm'
          type='text'
          value={category}
          placeholder='category'
          onChange={onChangeCategory}
        />
      </div>
      <button className='bg-black text-white px-3 py-1 rounded-sm w-[120px]' type='submit'>
        Post Thread
      </button>
    </form>
  )
}

CreateThreadInput.propTypes = {
  onPostThread: PropTypes.func.isRequired,
}

export default CreateThreadInput
