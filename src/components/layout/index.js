import React from 'react'
import Header from './_header'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const Layout = ({ children }) => {
    return (
        <div className='min-h-screen'>
            <Header />
            <main className={` min-h-screen p-24 ${inter.className}`}>
                {children}
            </main>
        </div>
    )
}

export default Layout