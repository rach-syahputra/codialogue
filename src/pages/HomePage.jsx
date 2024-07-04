import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncPopulateUsersAndThreads } from '../states/shared/action'
import ThreadsList from '../components/ThreadsList'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { asyncSetCategories } from '../states/categories/action'
import Loading from '../components/Loading'

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('')
  const { threads = [], users = [] } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads())
  }, [])

  useEffect(() => {
    const categories = [...new Set(threads.map((thread) => thread.category))]

    dispatch(asyncSetCategories(categories))
  }, [threads])

  const handleActiveCategoryChange = (category) => {
    if (category === activeCategory) {
      setActiveCategory('')
    } else {
      setActiveCategory(category)
    }
  }

  const threadsList = threads?.map((thread) => ({
    ...thread,
    owner: users?.find((user) => user.id === thread?.ownerId)
  }))

  return (
    <div className='mt-[70px] pb-4'>
      <Navbar />
      <Loading />
      <div className='w-[1024px] m-auto'>
        <Sidebar
          activeCategory={activeCategory}
          handleActiveCategoryChange={handleActiveCategoryChange}
          currentPage='threads'
        />
        {threadsList && <ThreadsList threads={threadsList} activeCategory={activeCategory} />}
      </div>
    </div>
  )
}

export default HomePage
