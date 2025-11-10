import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <div>
            <div className="grid-background"></div>
            <main className=' min-h-screen container p-5 '>
                <Header />
                <Outlet />
            </main>

            {/* <div className=" p-5 text-center bg-gray-800 mt-5 "> Developed By Indrajit Singha</div> */}
            <Footer/>
        </div>
    )
}

export default AppLayout