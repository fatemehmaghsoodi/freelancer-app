import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { DarkModeProvider } from './context/DarkThemProvider'
import AdminLayout from './features/admin/AdminLayout'
import FreelancerLayout from './features/freelancer/FreelancerLayout'
import OwnerLayout from './features/owner/OwnerLayout'
import AdminDashboard from './pages/AdminDashboard'
import Auth from './pages/Auth'
import CompleteProfile from './pages/Setting'
import FreelancerDashboard from './pages/FreelancerDashboard'
import OwnerDashboard from './pages/OwnerDashboard'
import Project from './pages/Project'
import Projects from './pages/Projects'
import Proposals from './pages/Proposals'
import SubmitedProjects from './pages/SubmitedProjects'
import Users from './pages/Users'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
 
const queryClient= new QueryClient()

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
      <Toaster/>
      <Routes>
        <Route path="login" element={<Auth/>} />
        <Route path="/setting" element={<CompleteProfile/>} />
        <Route path="/owner" element={<OwnerLayout/>} >
          <Route index element={<Navigate to="dashboard"/>}/>
          <Route path="dashboard" element={<OwnerDashboard/>} />
          <Route path="projects" element={<Projects/>}/>
          <Route path="projects/:id" element={<Project/>} />
        </Route>
        <Route path="/freelancer" element={<FreelancerLayout/>}>
          <Route index element={<Navigate to="dashboard"/>}/>
          <Route path="dashboard" element={<FreelancerDashboard/>} />
          <Route path="projects" element={<SubmitedProjects/>} />
          <Route path="proposals" element={<Proposals/>} />
        </Route>
        <Route path="/admin" element={<AdminLayout/>}>
          <Route index element={<Navigate to="dashboard"/>}/>
          <Route path="dashboard" element={<AdminDashboard/>} />
          <Route path="users" element={<Users/>} />
          <Route path="proposals" element={<Proposals/>} />
          <Route path="projects" element={<SubmitedProjects/>} />
        </Route>
        <Route path='*' element={<NotFound/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  )
}

export default App
