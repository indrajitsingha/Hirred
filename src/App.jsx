import React from 'react'
import { Button } from './components/ui/button'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import AppLayout from './AppLayout/AppLayout'
import Landing from './pages/Landing'
import Onboarding from './pages/Onboarding'
import Joblist from './pages/Joblist'
import Job from './pages/Job'
import { Postjob } from './pages/Postjob'
import Savedjob from './pages/Savedjob'
import Myjobs from './pages/Myjobs'
import { ThemeProvider } from './components/ThemeProvider'

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Landing />
        },
        {
          path: "/onboarding",
          element: <Onboarding />
        },
        {
          path: "/jobs",
          element: <Joblist />
        },
        {
          path: "/jobs/:id",
          element: <Job />
        },
        {
          path: "/post-job",
          element: <Postjob />
        },
        {
          path: "/saved-jobs",
          element: <Savedjob />
        },
        {
          path: "/my-jobs",
          element: <Myjobs />
        },
      ]
    }

  ])
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App