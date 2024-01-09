import Categories from '@/components/categories/categories'
import Layout from '@/components/layout'
import WorksList from '@/components/works/list'
import { useState } from 'react';


export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <Layout title='Home Page' description='Kroppa List Works' keywords='digital,advert,marketing'>
      <div className='p-3 mt-24 md:mt-0 md:p-24'>
        <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <WorksList activeCategory={activeCategory} />
      </div>
    </Layout>

  )
}
