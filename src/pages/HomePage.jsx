import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncPopulateUsersAndThreads } from '../states/shared/action'
import ThreadsList from '../components/ThreadsList'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { asyncSetCategories } from '../states/categories/action'
import Loading from '../components/Loading'
import BottomMenu from '../components/BottomMenu'

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
      <div className='lg:w-[1024px] m-auto pb-12'>
        <Sidebar
          activeCategory={activeCategory}
          handleActiveCategoryChange={handleActiveCategoryChange}
          currentPage='threads'
        />
        {threadsList &&
          <ThreadsList
            threads={threadsList}
            handleActiveCategoryChange={handleActiveCategoryChange}
            activeCategory={activeCategory}
          />
        }
        <BottomMenu currentPage='threads' />
      </div>
    </div>
  )
}

export default HomePage
